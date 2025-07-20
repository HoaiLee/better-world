// eslint-disable-next-line import/extensions
import { API_PATH, STRAPI_TOKEN } from 'astro:env/client';

type Payload = {
	endpoint: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	options?: Record<string, unknown>;
};
export const useFetch = async ({ endpoint, method = 'GET', options }: Payload) => fetch(`${API_PATH}/api/${endpoint}`, {
	method,
	headers: new Headers({
		Authorization: `bearer ${STRAPI_TOKEN}`,
		'Content-Type': 'application/x-www-form-urlencoded',
	}),
	...options,
});
