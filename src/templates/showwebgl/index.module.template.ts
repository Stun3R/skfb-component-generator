import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
  htmlElement,
}: TemplateParams) => `@import '~sass/common/variables/_variables.scss';
@import '~sass/common/_mixins.scss';

.root {
  display: block;
}
`;

export const fileName = "index.module.scss";

export const shouldOpen = true;
