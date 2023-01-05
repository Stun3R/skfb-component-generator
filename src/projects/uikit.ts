import { join } from "path";
import {
  workspace,
  window,
  TextDocumentShowOptions,
  InputBoxOptions,
} from "vscode";

import { templates } from "../templates/uikit";

import { ProjectParams } from "../utils/types";
import { createFile, createFolder } from "../utils/files";
import { validateHtmlElement } from "../utils/validators";

export const generateUIkit = async ({ fsPath, component }: ProjectParams) => {
  const htmlElementOptions: InputBoxOptions = {
    prompt: "Enter HTML Element (div is default)",
    value: "div",
    validateInput: validateHtmlElement,
  };

  let htmlElement = await window.showInputBox(htmlElementOptions);

  /**
   * If no HTML Element is given, we set default value
   */
  if (!htmlElement) {
    htmlElement = "div";
  }

  const path = join(fsPath, component);

  createFolder(path, component);

  const textDocumentShowOptions: TextDocumentShowOptions = {
    preserveFocus: false,
    preview: false,
  };

  for (const { fileName, template, shouldOpen } of templates) {
    const name =
      typeof fileName === "function" ? fileName(component) : fileName;

    createFile(join(path, name), template({ component, htmlElement }));

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
