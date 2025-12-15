// Removed missing vite/client reference to fix build error
// /// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_KEY: string;
  [key: string]: string | boolean | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Augment the existing ProcessEnv interface to include API_KEY
// This avoids redeclaring the global 'process' variable which causes type conflicts
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
