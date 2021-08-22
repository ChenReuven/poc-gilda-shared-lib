import { Story, Meta } from '@storybook/react';
import { CybButton } from './cyb-button';


export default {
  component: CybButton,
  title: 'CybButton'
} as Meta;

const Template: Story<any> = (args) => (
  <>
    <h1>This is React Cyb Button</h1>
    <CybButton title="cyb react button " {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {};
