<template>
  <div
    class="flex overflow-hidden"
    :class="[showShadow, 'rounded-button ', disabled || loading
      ? 'pointer-events-none'
      : '']"
  >
    <button
      type="button"
      v-bind="rest"
      :class="[
        buttonTypeClasses,
        buttonSizeClasses,
        'flex relative w-full text-center justify-center items-center cursor-pointer text-button',
        disabled || loading
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:shadow hover:text-shadow transition-all duration-300 ease-in-out'
      ]"
    >
      <component
        :is="aProps
          ? 'a'
          : 'span'"
        v-bind="aProps"
      >
        {{ label }}
      </component>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

type ButtonVariant = 'primary' | 'transparent' | 'destructive' | 'info';
type ButtonSize = 'small' | 'medium' | 'large';

type Props = {
	to?: string;
	label?: string;
	loading?: boolean;
	disabled?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
};

const props = withDefaults(defineProps<Props>(), {
	loading: false,
	disabled: false,
	size: 'small',
	variant: 'primary',
	to: undefined,
	label: undefined,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { class: _, ...rest } = useAttrs();

const SHADOW_CONTAINERS: Partial<Record<ButtonVariant, string>> = {
	transparent: 'shadow-[1px_1px_10px_rgba(0,0,0,0.2)]',
};

const BUTTON_CLASSES: Record<ButtonVariant, string> = {
	primary: 'bg-denim text-white transition-all duration-200 ease-out hover:bg-dark-salmon active:bg-denim',
	transparent: 'text-primary bg-transparent',
	destructive: 'bg-dark-salmon text-white',
	info: 'bg-light-denim text-primary',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
	small: 'pt-[14px] pb-[15px] px-5',
	medium: '',
	large: '',
};

const showShadow = computed(() => SHADOW_CONTAINERS[props.variant]);

const buttonTypeClasses = computed(() => BUTTON_CLASSES[props.variant]);

const buttonSizeClasses = computed(() => SIZE_CLASSES[props.size]);

const aProps = computed(() => (props.to
	? {
		href: props.to,
	}
	: undefined));
</script>
