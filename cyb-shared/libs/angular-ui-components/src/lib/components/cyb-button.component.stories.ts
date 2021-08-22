import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CybButtonComponent } from './cyb-button.component';

export default {
  title: 'CybButtonComponent',
  component: CybButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CybButtonComponent>;

const Template: Story<CybButtonComponent> = (args: CybButtonComponent) => ({
  component: CybButtonComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}