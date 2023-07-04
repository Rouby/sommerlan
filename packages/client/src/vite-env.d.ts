/// <reference types="vite/client" />
/// <reference types="mdx" />

declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
