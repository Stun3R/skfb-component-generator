import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
  htmlElement,
}: TemplateParams) => `export { default, ${component} } from './${component}';
export * from './types';
`;

export const fileName = "index.tsx";

export const shouldOpen = false;
