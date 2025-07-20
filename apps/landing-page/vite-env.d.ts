/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, any, any>;
  export default component;
}
