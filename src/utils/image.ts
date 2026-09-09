import type { ImageMetadata } from 'astro';

/** formats avif/webp apenas para raster; SVG permanece vetorial (placeholder). */
export function rasterFormats(src: ImageMetadata): ('avif' | 'webp')[] | undefined {
  return src.format !== 'svg' ? ['avif', 'webp'] : undefined;
}
