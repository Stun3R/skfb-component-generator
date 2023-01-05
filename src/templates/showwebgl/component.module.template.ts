import { TemplateParams } from "../../utils/types";

export const template = (
  params: TemplateParams
) => `@use "@sketchfab/design-system/sass/all" as skfb;

.root {
    display: block;
}
`;

export const fileName = (component: string) => `${component}.module.scss`;

export const shouldOpen = true;
