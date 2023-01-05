import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
  htmlElement,
}: TemplateParams) => `import React from 'react';

export type ${component}Props = {
  children?: React.ReactNode;
};
`;

export const fileName = "types.ts";

export const shouldOpen = true;
