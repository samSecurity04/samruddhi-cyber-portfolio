/** Prefix paths for GitHub Pages (`vite.config` base) and local dev (`/`). */
export function assetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL
  const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath
  return `${base}${path}`
}
