import { TemplateType } from "../../utils/types";

import * as indexTemplate from "./index.template";
import * as typesTemplate from "./types.template";
import * as componentStoriesTemplate from "./component.stories.template";
import * as componentSpecTemplate from "./component.spec.template";
import * as componentModuleTemplate from "./component.module.template";
import * as componentTemplate from "./component.template";

export const templates: TemplateType[] = [
  indexTemplate,
  componentSpecTemplate,
  componentStoriesTemplate,
  componentModuleTemplate,
  typesTemplate,
  componentTemplate,
];
