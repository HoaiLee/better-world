import {
  computed, ref, type Ref, unref,
} from 'vue';
import { isEmpty } from 'lodash-es';

export type FormValue = Date | string | number | boolean | string[]
  | Record<string, unknown> | null | undefined;

export type ValidatorType = 'required' | 'requiredIf' | 'email';

type ValidatorFunction = ((value?: FormValue) => boolean);

export type Validator<ParamType = unknown> = boolean | ValidatorFunction | {
  validator: ValidatorFunction;
  param: ParamType;
};

type ValidationRuleCollector = {
  [key in ValidatorType]?: Validator;
};

export type ValidationRules<T> = {
  [Key in keyof T]?: ValidationRuleCollector;
};

export type FormLabels<T> = { [Key in keyof T]?: string };

export type FormValidation<T extends Record<string, FormValue>> = {
  form?: T | Ref<T>;
  labels?: Partial<FormLabels<T>> | Ref<FormLabels<T>>;
  rules?: ValidationRules<T> | Ref<ValidationRules<T>>;
};

// eslint-disable-next-line no-control-regex
const emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

export const email: Validator = (value?: FormValue): boolean => (!!value
  && typeof value === 'string'
  && emailRegex.test(value));

export const required = (value: FormValue): boolean => {
  if (Array.isArray(value)) {
    return !!value.length;
  }

  if (value === undefined || value === null) {
    return false;
  }

  if (typeof value === 'boolean') {
    return true;
  }

  if (value instanceof Date) {
    return !Number.isNaN(value.getTime());
  }

  if (typeof value === 'object') {
    return !isEmpty(value);
  }

  return !!String(value).length;
};

const getFieldErrorMessage = (
  label: string | undefined,
  errorType: ValidatorType | Omit<string, keyof Validator>,
  param?: unknown,
): string => {
  switch (errorType) {
    case 'required':
    case 'requiredIf':
      return `The ${label || 'field'} is required`;
    case 'email':
      return `The ${label || 'field'} must a valid email address.`;
    case 'numeric':
      return `The ${label || 'field'} must be a valid number.`;
    case 'maxLength':
      return `The ${label || 'field'} cannot have more than ${param} characters.`;
    case 'minLength':
      return `The ${label || 'field'} must have ${param} or more characters.`;
    default:
      return `The ${label || 'field'} is invalid`;
  }
};

export const requiredIf = (isRequired?: ((v: FormValue) => boolean)) => (value: FormValue) => {
  const isValueRequired = isRequired?.(value);

  if (isValueRequired) {
    return required(value);
  }

  return true;
};

const useForm = <Type extends Record<string, FormValue>>(
  { form, rules, labels }: FormValidation<Type> = {},
) => {
  const errorMessages = ref<Record<string, string | undefined>>({});
  const generalErrorMessage = ref('');

  const isFormValid = computed(() => !Object.values(errorMessages.value)
    .filter((error) => !!error).length);

  const setErrorMessage = (errors: Record<string, string[]>) => {
    const errorResult: Record<string, string> = {};

    Object.keys(errors).forEach((error) => {
      errorResult[error] = errors[error]!.join(', ');
    });

    errorMessages.value = errorResult;
  };

  const setGenericError = (message = 'Error') => {
    generalErrorMessage.value = message;
  };

  const resetError = () => {
    errorMessages.value = {};
    generalErrorMessage.value = '';
  };

  const validateField = (key: keyof Type) => {
    let validationMessages: string | undefined;
    const formValue = unref(form);
    const rulesList = unref(rules);
    const labelsName = unref(labels);

    const value = formValue?.[key];
    const fieldRulesAsObject: ValidationRuleCollector | undefined = (rulesList && rulesList[key]
        && key in rulesList)
      ? rulesList[key]
      : undefined;
    const label: string | undefined = (labelsName && key in labelsName && labelsName[key])
      ? labelsName[key]
      : undefined;

    if (!fieldRulesAsObject) {
      return;
    }

    Object.entries<Validator>(fieldRulesAsObject)
      .forEach(([ruleKey, ruleValue]: [string, Validator]) => {
        if (validationMessages) {
          return;
        }

        let isFieldValid = true;
        let validationParam: unknown;

        if (typeof ruleValue === 'object' && 'validator' in ruleValue && typeof ruleValue.validator === 'function') {
          // Validate for validation has params
          isFieldValid = ruleValue.validator(value);
          validationParam = ruleValue.param;
        } else if (typeof ruleValue === 'function') {
          isFieldValid = ruleValue(value);
        }

        if (!isFieldValid) {
          validationMessages = getFieldErrorMessage(label, ruleKey, validationParam);
        }
      });

    if (validationMessages) {
      errorMessages.value[String(key)] = validationMessages;
    } else {
      delete errorMessages.value[String(key)];
    }
  };

  const validate = () => {
    const formValue = unref(form);

    Object.keys(formValue || {}).forEach(validateField);
  };

  return {
    errorMessages,
    generalErrorMessage,

    isFormValid,

    setErrorMessage,
    setGenericError,
    resetError,
    validate,
    validateField,
  };
};

export default useForm;
