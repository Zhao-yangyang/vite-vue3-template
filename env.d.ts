/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_CODE: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_BASE: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_BASE_SERVER_URL: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
