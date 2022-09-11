import * as vscode from "vscode";

export const activate = (context: vscode.ExtensionContext) => {
  let disposable = vscode.commands.registerCommand(
    "skfb-component-generator.generate",
    () => {
      vscode.window.showInformationMessage("Let's generate some components!!");
    }
  );

  context.subscriptions.push(disposable);
};

// this method is called when your extension is deactivated
const deactivate = () => {};
