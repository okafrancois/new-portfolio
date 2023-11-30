interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_API_BASE_PATH: string;
  VITE_PORT?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}