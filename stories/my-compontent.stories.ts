import { StoryFn, Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import '../src/my-component.js';

export default {
  title: 'MyComponent',
  component: 'my-component',
  // argTypes: {
  //   title: { control: 'text' },
  //   counter: { control: 'number' },
  //   textColor: { control: 'color' },
  // },
} as Meta;

interface ArgTypes {
  heading?: string;
  counter?: number;
  slot?: TemplateResult;
}

const Template: StoryFn<ArgTypes> = ({
  heading = 'Hello world',
  counter = 5,
  slot,
}: ArgTypes) => html`
  <my-component .heading=${heading} .counter=${counter}> ${slot} </my-component>
`;

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  heading: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
