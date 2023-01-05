import { TemplateType } from "../../utils/types";

import * as indexTemplate from "./index.template";
import * as componentModuleTemplate from "./component.module.template";
import * as componentTemplate from "./component.template";
import * as typesTemplate from "./types.template";

export const templates: TemplateType[] = [
  indexTemplate,
  typesTemplate,
  componentModuleTemplate,
  componentTemplate,
];
