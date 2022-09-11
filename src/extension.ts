import {
  commands,
  ExtensionContext,
  InputBoxOptions,
  QuickPickOptions,
  Uri,
  window,
} from "vscode";
import { generateShowwebgl } from "./projects";
import { Projects } from "./utils/types";
import { validateComponent, validateHtmlElement } from "./utils/validators";

export const activate = (context: ExtensionContext) => {
  let disposable = commands.registerCommand(
    "skfb-component-generator.generate",
    generate
  );

  context.subscriptions.push(disposable);
};

export const generate = async ({ fsPath }: Uri) => {
  const projectOptions: QuickPickOptions = {
    placeHolder: "For which project this component will be created?",
  };

  const project = await window.showQuickPick(
    [Projects.showwebgl, Projects.uikit],
    projectOptions
  );

  /**
   * If no project is selected, we close the prompt
   */
  if (!project) {
    return;
  }

  const componentOptions: InputBoxOptions = {
    prompt: `Component will be created at ${fsPath}`,
    placeHolder: "Enter Component's Name",
    validateInput: validateComponent,
  };

  const component = await window.showInputBox(componentOptions);

  /**
   * If no component's name is given, we close the prompt
   */
  if (!component) {
    return;
  }

  const htmlElementOptions: InputBoxOptions = {
    prompt: "Enter HTML Element (div is default)",
    value: "div",
    validateInput: validateHtmlElement,
  };

  const htmlElement = await window.showInputBox(htmlElementOptions);

  /**
   * If no HTML Element is given, we close the prompt
   */
  if (!htmlElement) {
    return;
  }

  try {
    switch (project) {
      case Projects.showwebgl:
        await generateShowwebgl({ fsPath, component, htmlElement });
        break;
      case Projects.uikit:
        // buildUiKit
        break;
    }
  } catch (error) {
    window.showErrorMessage(
      `Could not create the component ${component}. ${error}`
    );
  }
};

// this method is called when your extension is deactivated
const deactivate = () => {};
