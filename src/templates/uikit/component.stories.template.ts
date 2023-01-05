import { TemplateParams } from "../../utils/types";

export const template = ({
  component,
}: TemplateParams) => `import React from 'react';
import { Meta, Story } from '@storybook/react';

import ${component} from './${component}';

export default {
  title: 'Components/${component}',
  component: ${component},
} as Meta;

type StoryProps = React.ComponentProps<typeof ${component}>;

export const Default: Story<StoryProps> = (props) => {
  return <${component} {...props} />;
};

Default.args = {};

/**
 * @storyDesc My story description
 */
export const OtherStory = () => {
  return <${component} />;
};
`;

export const fileName = (component: string) => `${component}.stories.tsx`;

export const shouldOpen = false;
