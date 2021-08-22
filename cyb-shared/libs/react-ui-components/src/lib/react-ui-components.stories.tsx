import { Story, Meta } from '@storybook/react';
import {
  ReactUiComponents,
  ReactUiComponentsProps,
} from './react-ui-components';

export default {
  component: ReactUiComponents,
  title: 'ReactUiComponents',
} as Meta;

const Template: Story<ReactUiComponentsProps> = (args) => (
  <ReactUiComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
