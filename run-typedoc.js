// @ts-check

// const td = require('typedoc');
// const ts = require('typescript');
import td from "typedoc";
import ts from "typescript";

import typedocJson from "./typedoc.json" assert { type: "json" };
// const typedocJson = require('typedoc.json');

export const createTypeScriptApiDocs = async({ entryPoint, outDir }, typeDocOptions) => {
  const app = new td.Application();
  app.options.addReader(new td.TSConfigReader());

  app.bootstrap({
    ...typedocJson,
    entryPoints: [entryPoint],
    tsconfig: "tsconfig.json",
    ...typeDocOptions,
  });

  const program = ts.createProgram(app.options.getFileNames(), app.options.getCompilerOptions());

  const project = app.converter.convert(
    app.expandInputFiles(app.options.getValue("entryPoints")),
    program
  );

  if (project) {
    await app.generateDocs(project, outDir);
  } else {
    throw new Error(`Error creating the TypeScript API docs for ${entryPoint}.`);
  }
};
