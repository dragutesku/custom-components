/** Typescript setup file
 * @ts-check
 * 
**/

const fs = require("fs");
const path = require("path");
const { argv } = require("process");

const projectRoot = argv[2] || path.join(__dirname, "..");

//// Add deps to pkg.json
const packageJSON = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"));


packageJSON.devDependencies = Object.assign(packageJSON.devDependencies, {
  "@rollup/plugin-typescript": "^8.0.0",
  "svelte-check": "^1.0.0",
  "svelte-preprocess": "^4.0.0",
  "typescript": "^4.0.0",
  "tslib": "^2.0.0",
  "@tsconfig/svelte": "^1.0.0"
});

//// Script for checking svelte
packageJSON.scripts = Object.assign(packageJSON.scripts, {
  "validate": "svelte-check"
});

//// INIT: json write
fs.writeFileSync(path.join(projectRoot, "package.json"), JSON.stringify(packageJSON, null, "  "))

//// Switch the app.svelte file to use TS
const appSveltePath = path.join(projectRoot, "src", "TestSvelte.svelte"); // TODO: USE COMPONENT NAME WITH PLOP 
let appFile = fs.readFileSync(appSveltePath, "utf8");
appFile = appFile.replace("<script>", '<script lang="typescript">');
// INIT: script rename
fs.writeFileSync(appSveltePath, appFile);


//// Edit rollup config
const rollupConfigPath = path.join(projectRoot, "rollup.config.js")
let rollupConfig = fs.readFileSync(rollupConfigPath, "utf8")


//// Edit imports
rollupConfig = rollupConfig.replace(
  `'rollup-plugin-terser';`, 
  `'rollup-plugin-terser';
  import sveltePreprocess from 'svelte-preprocess';
  import typescript from '@rollup/plugin-typescript';`
);

//// Add preprocessor
rollupConfig = rollupConfig.replace(
  'compilerOptions:',
  'preprocess: sveltePreprocess({ sourceMap: !production }),\n\t\t\tcompilerOptions:'
);

//// Add TypeScript
rollupConfig = rollupConfig.replace(
  'commonjs(),',
  'commonjs(),\n\t\ttypescript({\n\t\t\tsourceMap: !production,\n\t\t\tinlineSources: !production\n\t\t}),'
);

//// Replace name of entry point
rollupConfig = rollupConfig.replace(`'src/index.js'`, `"src/index.ts"`);

// INIT: rollup config
fs.writeFileSync(rollupConfigPath, rollupConfig);

//// Add TSConfig
let tsconfig = `{
  "extends": "@tsconfig/svelte/tsconfig.json",
  "include": ["src/**/*"],
  "exclude": ["node_modules/*", "__sapper__/*", "public/*"]
}`;

const tsconfigPath =  path.join(projectRoot, "tsconfig.json")
// INIT: tsconfig
fs.writeFileSync(tsconfigPath, tsconfig);

//// Rename index.js 
// mv src/index.js to index.ts - note, we need to edit rollup.config.js for this too
const beforeMainJSPath = path.join(projectRoot, "src", "index.js");
const afterMainTSPath = path.join(projectRoot, "src", "index.ts");

// INIT: index rename
fs.renameSync(beforeMainJSPath, afterMainTSPath);


// Delete this script, but not during testing
if (!argv[2]) {
  // Remove the script
  fs.unlinkSync(path.join(__filename));

  // Check for Mac's DS_store file, and if it's the only one left remove it
  const remainingFiles = fs.readdirSync(path.join(__dirname))
  if (remainingFiles.length === 1 && remainingFiles[0] === '.DS_store') {
    fs.unlinkSync(path.join(__dirname, '.DS_store'))
  }

  // Check if the scripts folder is empty
  if (fs.readdirSync(path.join(__dirname)).length === 0) {
    // Remove the scripts folder
    fs.rmdirSync(path.join(__dirname));
  }
}

// Adds the extension recommendation
fs.mkdirSync(path.join(projectRoot, ".vscode"), { recursive: true })
fs.writeFileSync(path.join(projectRoot, ".vscode", "extensions.json"), `{
  "recommendations": ["svelte.svelte-vscode"]
}
`);

// Remove the setup script
const removeScriptPath = path.join(projectRoot, "package.json"); // TODO: USE COMPONENT NAME WITH PLOP 
let scriptFile = fs.readFileSync(removeScriptPath, "utf8");
scriptFile = scriptFile.replace('"setup-ts": "cross-env node ./scripts/setupTypeScript.js && lerna bootstrap",', '"typescript": "tsc",');
// INIT: script rename
fs.writeFileSync(removeScriptPath, scriptFile);

console.log('CONVERSION: Webcomponent Converted to typescript !');

if (fs.existsSync(path.join(projectRoot, "node_modules"))) {
  console.log("\nYou will need to re-run your dependency manager to get started.")
}
