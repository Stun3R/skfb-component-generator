import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
}: TemplateParams) => `import React from 'react';
import { bindClassNames } from '@sketchfab/ui-kit';

import { ${component}Props } from './types';

import styles from './${component}.module.scss';

const cx = bindClassNames(styles);

/**
 * Renders ...
 */
export const ${component}: React.FC<${component}Props> = (props) => {
    const { className, ...otherProps } = props;

    return (
        <div className={cx('root', className)} {...otherProps}>
            My Component
        </div>
    );
};

${component}.displayName = '${component}';

export default ${component};
`;

export const fileName = (component: string) => `${component}.tsx`;

export const shouldOpen = true;
