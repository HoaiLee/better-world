<template>
  <BaseInput v-bind="labelProps">
    <input
      v-model="model"
      class="placeholder:text-[rgba(58,_78,_97,_0.35)] text-body
      	text-denim font-normal outline-none w-full bg-transparent text-ellipsis"
      :class="{
        'mt-1': label,
      }"
      :placeholder="placeholder"
      v-bind="attrs"
    >
  </BaseInput>
</template>

<script setup lang="ts">
import BaseInput from 'components/common/form/BaseInput.vue';
import type { BaseInputProps } from 'src/types/BaseInput.ts';
import { computed, useAttrs } from 'vue';

type Props = BaseInputProps & {
	placeholder?: string;
};

defineOptions({
	inheritAttrs: false,
});

const model = defineModel<string | null | undefined>({
	required: true,
});

const props = defineProps<Props>();

const attrs = useAttrs();

const labelProps = computed<BaseInputProps>(() => ({
	label: props.label,
	required: props.required,
	labelClass: props.labelClass,
	disabled: props.disabled,
	errorMessage: props.errorMessage,
}));
</script>
