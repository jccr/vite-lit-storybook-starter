import { StoryFn, Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import '../src/my-element.js';

export default {
  title: 'MyElement',
  component: 'my-element',
} as Meta;

interface ArgTypes {
  slot?: TemplateResult;
}

const Template: StoryFn<ArgTypes> = () => html` <my-element> </my-element> `;

export const Regular = Template.bind({});
