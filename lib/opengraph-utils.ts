/**
 * Utility functions for OpenGraph image generation
 */

/**
 * Load the Inter SemiBold font from GitHub
 * This avoids requiring the font to be in the public directory
 */
export async function loadInterSemiBold() {
  return fetch(
    new URL(
      "https://github.com/rsms/inter/raw/master/docs/font-files/Inter-SemiBold.ttf"
    )
  ).then((res) => res.arrayBuffer());
}

/**
 * Common font configuration for OpenGraph images
 */
export async function getInterFontConfig(): Promise<
  Array<{
    name: string;
    data: ArrayBuffer;
    style: "normal" | "italic";
    weight: 600;
  }>
> {
  return [
    {
      name: "Inter",
      data: await loadInterSemiBold(),
      style: "normal" as const,
      weight: 600 as const
    }
  ];
}
