interface ImportMetaEnv {
	readonly API_PATH: string;
	readonly STRAPI_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
