import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
}: TemplateParams) => `export { default, ${component} } from './${component}';
export * from './types';
`;

export const fileName = "index.tsx";

export const shouldOpen = false;
