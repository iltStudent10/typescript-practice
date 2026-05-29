export type PackageInfo = {
  name: string;
  version: string;
  isDevDependency: boolean;
};

export function formatPackage(pkg: PackageInfo): string {
  const depType = pkg.isDevDependency ? "devDependency" : "dependency";
  return `${pkg.name}@${pkg.version} (${depType})`;
}

export function countScripts(scripts: Record<string, string>): number {
  return Object.keys(scripts).length;
}

export function createInstallCommand(pkg: string, isDev: boolean): string {
  return isDev ? `npm install -D ${pkg}` : `npm install ${pkg}`;
}
