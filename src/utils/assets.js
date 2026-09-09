/**
 * Resolves static assets against the Vite BASE_URL.
 * Supports root deployment and subpaths like GitHub Pages (/baty-services/).
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
