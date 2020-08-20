import React from 'react';
import { HighlightedText } from './highlighted-text';

export const LargeText = () => {
  return (
    <HighlightedText element='p' size="lg">
      Large highlighted text.
    </HighlightedText>
  );
};

export function SmallText() {
  return (
    <HighlightedText element='p' size="sm">
      Small highlighted text.
    </HighlightedText>
  );
};

// SmallText.canvas = {
//   width: 300,
// };
