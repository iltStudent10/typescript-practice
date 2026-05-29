import { countScripts, createInstallCommand, formatPackage } from "./utils.mjs";
function createProjectSummary(project) {
    return `${project.projectName} has ${countScripts(project.scripts)} scripts and ${project.packages.length} packages.`;
}
const project = {
    projectName: "typescript-practice",
    scripts: {
        build: "tsc",
        watch: "tsc --watch",
        "build:esm": "tsc -p tsconfig.esm.json",
        "start:esm": "node dist-esm/main.mjs",
    },
    packages: [
        { name: "typescript", version: "6.0.3", isDevDependency: true },
        { name: "tsx", version: "4.20.6", isDevDependency: true },
    ],
};
console.log(createProjectSummary(project));
console.log("Package list:");
for (const pkg of project.packages) {
    console.log("-", formatPackage(pkg));
}
console.log("Suggested install commands:");
console.log("-", createInstallCommand("typescript", true));
console.log("-", createInstallCommand("tsx", true));
