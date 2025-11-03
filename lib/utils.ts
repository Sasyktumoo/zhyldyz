export function getAssetPath(path: string): string {
  // No basePath needed for custom domain (frenchwithzhyldyz.online)
  const basePath = '';
  return `${basePath}${path}`;
}

