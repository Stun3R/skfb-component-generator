export enum Projects {
  showwebgl = "Showwebgl",
  uikit = "Sketchfab UI Kit",
}

export type TemplateParams = {
  component: string;
  htmlElement: string;
};

export type TemplateType = {
  fileName: string | ((component: string) => string);
  template: (params: TemplateParams) => string;
  shouldOpen: boolean;
};

export type ProjectParams = {
  fsPath: string;
  component: string;
  htmlElement: string;
};
