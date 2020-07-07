import React from 'react';
import { HighlightedText } from './highlighted-text';
import { LargeText, SmallText } from './highlighted-test.composition';

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
}

export const examples = [
  {
    scope: {HighlightedText},
    code: `<HighlightedText element='p' size='lg'>
            Large highlighted text.
          </HighlightedText>`
  }
];
