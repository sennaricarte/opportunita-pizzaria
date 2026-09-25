import type { ImageMetadata } from 'astro';

const jpgPng = new Set(['jpg', 'jpeg', 'png']);

/** avif + webp só para JPG/PNG. SVG permanece sem conversão. */
export function rasterFormats(src: ImageMetadata): ['avif', 'webp'] | undefined {
  return jpgPng.has(src.format) ? ['avif', 'webp'] : undefined;
}
