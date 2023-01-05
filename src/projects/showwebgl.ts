import { join } from "path";
import { workspace, window, TextDocumentShowOptions } from "vscode";

import { ProjectParams } from "../utils/types";
import { createFile, createFolder } from "../utils/files";
import { templates } from "../templates/showwebgl";

export const generateShowwebgl = async ({
  fsPath,
  component,
}: ProjectParams) => {
  const path = join(fsPath, component);

  createFolder(path, component);

  const textDocumentShowOptions: TextDocumentShowOptions = {
    preserveFocus: false,
    preview: false,
  };

  for (const { fileName, template, shouldOpen } of templates) {
    const name =
      typeof fileName === "function" ? fileName(component) : fileName;

    createFile(join(path, name), template({ component }));

    if (!shouldOpen) {
      continue;
    }

    /**
     * Open the created files which has the params shouldOpen
     */
    const document = await workspace.openTextDocument(join(path, name));
    await window.showTextDocument(document, textDocumentShowOptions);
  }
};
