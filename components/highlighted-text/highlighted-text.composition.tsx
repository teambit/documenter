import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { HighlightedText } from './highlighted-text';

export const LargeText = () => {
  return (
    <ThemeCompositions>
      <HighlightedText element="p" size="lg">
        Large highlighted text.
      </HighlightedText>
    </ThemeCompositions>
  );
};

export function SmallText() {
  return (
    <ThemeCompositions>
      <HighlightedText element="p" size="sm">
        Small highlighted text.
      </HighlightedText>
    </ThemeCompositions>
  );
}
