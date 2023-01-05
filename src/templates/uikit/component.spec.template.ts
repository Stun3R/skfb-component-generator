import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
  htmlElement,
}: TemplateParams) => `import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ${component} from './${component}';

describe('${component}', () => {
  it('render without crashing', async () => {
    const user = userEvent.setup();

    render(<${component}>content</${component}>);

    const content = screen.getByText('content');

    expect(content).toBeInTheDocument();
  });

  it('make use of the as prop', () => {
    render(<${component} as=\"button\">content</${component}>);

    const button${component} = screen.getByRole('button');

    expect(button${component}).toBeInTheDocument();
  });
});
`;

export const fileName = (component: string) => `${component}.spec.tsx`;

export const shouldOpen = false;
