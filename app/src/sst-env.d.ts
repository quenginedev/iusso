/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STORE_SERVICE: string
  readonly VITE_EVENT_SERVICE: string
  readonly VITE_AUTH_SERVICE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}