export function formatPackage(pkg) {
    const depType = pkg.isDevDependency ? "devDependency" : "dependency";
    return `${pkg.name}@${pkg.version} (${depType})`;
}
export function countScripts(scripts) {
    return Object.keys(scripts).length;
}
export function createInstallCommand(pkg, isDev) {
    return isDev ? `npm install -D ${pkg}` : `npm install ${pkg}`;
}
