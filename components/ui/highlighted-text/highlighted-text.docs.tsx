import React from 'react';
import { HighlightedText } from './highlighted-text';
import { LargeText, SmallText } from './highlighted-text.composition';

export const labels = ['react', 'ui-component', 'text'];

export const examples = [
  {
    scope: { HighlightedText },
    title: 'Using the Highlighted Text component',
    description: "This component returns a highlighted text in the form of either a 'p', 'div', or 'span' element.",
    code:
`
<>
  This is a 
  <HighlightedText element='p'>
    element.
  </HighlightedText>
  This is a 
  <HighlightedText element='div'>
    div element. 
  </HighlightedText>
  This is a 
  <HighlightedText element='span'>
    span element. 
  </HighlightedText>
</>
`
  },
  {
    scope: { HighlightedText },
    description: 'Choose one of seven available sizes from "xxs" to "xxl"',
    code: `
<>
  <HighlightedText size='xxs'>
    XX-Small Text
  </HighlightedText>
  <HighlightedText size='xm'>
    Small Text
  </HighlightedText>
  <HighlightedText size='sm'>
    Small Text
  </HighlightedText>
  <HighlightedText size='md'>
    Medium Text
  </HighlightedText>
  <HighlightedText size='lg'>
    Small Text
  </HighlightedText>
  <HighlightedText size='xl'>
    X-Large Text
  </HighlightedText>
  <HighlightedText size='xxl'>
    XX-Large Text
  </HighlightedText>
</>
    `
  }
];
