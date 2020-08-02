import React from 'react';
import { PossibleSizes } from '@teambit.base-ui.theme.sizes';
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
    scope: { HighlightedText, PossibleSizes },
    // prettier-ignore
    code: (
`<HighlightedText element='p' size='lg' size={PossibleSizes.sm}>
  Large highlighted text.
</HighlightedText>`
    )
  },
];
