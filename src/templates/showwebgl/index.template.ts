import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
  htmlElement,
}: TemplateParams) => `import React from 'react';

import styles from './index.module.scss';

type ${component}Props = {
  // Define your props here
}

const ${component} = (props: ${component}Props) => {
    return <${htmlElement} className={styles.root} />;
};

export default ${component};
`;

export const fileName = "index.tsx";

export const shouldOpen = true;
