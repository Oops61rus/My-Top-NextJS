/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module '*.svg' {
  const content: React.FC<React.SVGAttributes<SVGAElement>>;
  export default content;
}