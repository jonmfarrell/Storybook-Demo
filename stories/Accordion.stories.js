import { createAccordion } from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Example/Accordion',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createAccordion();
  },
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
    args: {
    },
  };