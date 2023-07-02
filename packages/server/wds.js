module.exports = {
  // which file extensions to build, defaults to .js, .jsx, .ts, .tsx extensions
  extensions: [".tsx", ".ts", ".mdx"],

  // file paths to explicitly not transform for speed, defaults to [], plus whatever the compiler backend excludes by default, which is `node_modules` for swc
  ignore: [
    "spec/integration/**/node_modules",
    "spec/**/*.spec.ts",
    "cypress/",
    "public/",
  ],
};
