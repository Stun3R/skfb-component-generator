import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
  htmlElement,
}: TemplateParams) => `import React from 'react';
import { bindClassNames } from '../../utils/classNames';
import { forwardRefWithAs } from '../../utils/forwardRefWithAsProp';

import { ${component}Props } from './types';

import styles from './${component}.module.scss';

const cx = bindClassNames(styles);

/**
 * Renders ...
 */
export const ${component} = forwardRefWithAs<${component}Props, '${htmlElement}'>((props, ref) => {
  const { children, as, className, ...otherProps } = props;

  const Element = as || '${htmlElement}';

  return (
    <Element ref={ref} className={cx('root', className)} {...otherProps}>
      {children}
    </Element>
  );
});

${component}.displayName = '${component}';

export default ${component};
`;

export const fileName = (component: string) => `${component}.tsx`;

export const shouldOpen = true;
