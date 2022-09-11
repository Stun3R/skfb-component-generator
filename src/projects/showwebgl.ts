import { join } from "path";
import { workspace, window, TextDocumentShowOptions } from "vscode";

import { ProjectParams } from "../utils/types";
import { createFile, createFolder } from "../utils/files";
import { templates } from "../templates/showwebgl";

export const generateShowwebgl = async ({
  fsPath,
  component,
  htmlElement,
}: ProjectParams) => {
  const path = join(fsPath, component);

  createFolder(path, component);

  const textDocumentShowOptions: TextDocumentShowOptions = {
    preserveFocus: false,
    preview: false,
  };

  for (const { fileName, template, shouldOpen } of templates) {
    createFile(join(path, fileName), template({ component, htmlElement }));

    if (!shouldOpen) {
      continue;
    }

    /**
     * Open the created files which has the params shouldOpen
     */
    const document = await workspace.openTextDocument(join(path, fileName));
    await window.showTextDocument(document, textDocumentShowOptions);
  }
};
