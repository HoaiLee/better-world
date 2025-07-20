/// <reference types="vite/client" />

// Mocks all files ending in `.vue` showing them as plain Vue instances
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, any, any>;
  export default component;
}
