// eslint-disable-next-line import/extensions
import { defineConfig, envField } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [vue({})],

	env: {
		schema: {
			API_PATH: envField.string({ context: 'client', access: 'public', optional: true }),
			STRAPI_TOKEN: envField.string({ context: 'client', access: 'public', optional: true }),
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
