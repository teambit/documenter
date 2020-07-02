import React from 'react';
import { HighlightedText } from './highlighted-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';

export const LargeText = () => {
  return (
    <HighlightedText element='p' size={PossibleSizes.lg}>
      Large highlighted text.
    </HighlightedText>
  );
};

export function SmallText() {
  return (
    <HighlightedText element='p' size={PossibleSizes.sm}>
      Small highlighted text.
    </HighlightedText>
  );
};

SmallText.canvas = {
  width: 300,
  height: 200
};
