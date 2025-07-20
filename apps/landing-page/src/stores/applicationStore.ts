import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useApplicationStore = defineStore('application', () => {
	const applicationSettings = ref<Record<string, string>>();

	return {
		applicationSettings,
	};
});
