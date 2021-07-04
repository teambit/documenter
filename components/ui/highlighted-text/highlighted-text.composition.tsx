import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { HighlightedText } from './highlighted-text';

export function Preview() {
  return <HighlightedText>highlighted text</HighlightedText>;
}

export const LargeText = () => {
  return (
    <ThemeCompositions>
      <div style={{ fontSize: 20 }}>
        Use <HighlightedText>highlighted text</HighlightedText> to highlight
        code
      </div>
    </ThemeCompositions>
  );
};

export function SmallText() {
  return (
    <ThemeCompositions>
      <div style={{ fontSize: 18 }}>
        Use <HighlightedText>highlighted text</HighlightedText> to highlight
        code
      </div>
    </ThemeCompositions>
  );
}
