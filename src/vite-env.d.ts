/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_CLIENT_ID: string;
  readonly VITE_GITHUB_CLIENT_SECRETS: string;
  readonly VITE_COVID19_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
