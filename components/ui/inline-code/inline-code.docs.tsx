import React from 'react';
import { InlineCode } from './inline-code';

export const labels = ['react', 'ui-component', 'text'];

export const examples = [
  {
    scope: { InlineCode },
    title: 'Using the Highlighted Text component',
    description:
      "This component returns a highlighted text in the form of either a 'p', 'div', or 'span' element.",
    code: `
<>
  This is a 
  <InlineCode element='p'>
    element.
  </InlineCode>
  This is a 
  <InlineCode element='div'>
    div element. 
  </InlineCode>
  This is a 
  <InlineCode element='span'>
    span element. 
  </InlineCode>
</>
`,
  },
  {
    scope: { InlineCode },
    description: 'Choose one of seven available sizes from "xxs" to "xxl"',
    code: `
<>
  <InlineCode size='xxs'>
    XX-Small Text
  </InlineCode>
  <InlineCode size='xm'>
    Small Text
  </InlineCode>
  <InlineCode size='sm'>
    Small Text
  </InlineCode>
  <InlineCode size='md'>
    Medium Text
  </InlineCode>
  <InlineCode size='lg'>
    Small Text
  </InlineCode>
  <InlineCode size='xl'>
    X-Large Text
  </InlineCode>
  <InlineCode size='xxl'>
    XX-Large Text
  </InlineCode>
</>
    `,
  },
];
