import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
  htmlElement,
}: TemplateParams) => `@import 'ui-kit-theme';

// Classes

.root {
  display: block;
}
`;

export const fileName = (component: string) => `${component}.module.scss`;

export const shouldOpen = false;
