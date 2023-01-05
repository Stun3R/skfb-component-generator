import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
}: TemplateParams) => `import React from 'react';

export type ${component}Props = {
    /**
     * Extends component style
     */
    className?: string;
};
`;

export const fileName = "types.ts";

export const shouldOpen = true;
