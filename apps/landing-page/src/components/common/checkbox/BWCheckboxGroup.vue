<script setup lang="ts">
import { computed } from 'vue';
import BWCheckbox from 'components/common/checkbox/BWCheckbox.vue';

type CheckboxOption = {
	label: string;
	value: string;
};

type Props = {
	label?: string;
	alignment?: 'vertical' | 'horizontal';
	checkboxes: CheckboxOption[];
};

const model = defineModel<string[] | null | undefined>();

withDefaults(defineProps<Props>(), {
	alignment: 'vertical',
	label: undefined,
});

const alignmentClasses = computed(() => ({
	horizontal: 'gap-x-[7px] flex-wrap',
	vertical: 'flex-col gap-y-[7px]',
}));

const isSelectedCheckbox = (value: string): boolean => Array.isArray(model.value)
	&& model.value.includes(value);

const toggleCheckbox = (value: string): void => {
	model.value = isSelectedCheckbox(value)
		? model.value?.filter((v) => v !== value)
		: [...model.value ?? [], value];
};
</script>

<template>
  <div>
    <label
      v-if="label"
      class="text-babel2 font-bold"
    >
      {{
        label
      }}
    </label>

    <div
      class="flex"
      :class="alignmentClasses[alignment]"
    >
      <BWCheckbox
        v-for="(checkbox, i) in checkboxes"
        :key="i"
        :label="checkbox.label"
        :value="checkbox.value"
        :model-value="isSelectedCheckbox(checkbox.value)"
        @update:model-value="toggleCheckbox(checkbox.value)"
      />
    </div>
  </div>
</template>
