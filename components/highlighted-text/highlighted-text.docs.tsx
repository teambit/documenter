import React from 'react';
import { HighlightedText } from './highlighted-text';
import { LargeText, SmallText } from './highlighted-text.composition';

export const labels = ['react', 'ui-component', 'text'];

export default () => {
  return (
    <div>
      Text can be rendered in many different sizes.
      <br />
      Large:
      <LargeText />
      <br />
      Small:
      <SmallText />
    </div>
  );
};

export const examples = [
  {
    scope: { HighlightedText },
    // prettier-ignore
    code: (
`<HighlightedText element='p' size='lg'>
  Large highlighted text.
</HighlightedText>`
    )
  },
  {
    scope: { HighlightedText },
    // prettier-ignore
    code: (
`<HighlightedText element='p' size='sm'>
  Large highlighted text.
</HighlightedText>`
    )
  },
];
