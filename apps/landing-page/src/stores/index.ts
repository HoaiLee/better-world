import { createPinia, type Pinia } from 'pinia';

// eslint-disable-next-line import/no-mutable-exports
let pinia: Pinia;

export { pinia };

export default function init() {
	pinia = createPinia();

	return pinia;
}
