import React from 'react';
import { HighlightedText } from './highlighted-text';

export function Preview() {
  return <HighlightedText>highlighted text</HighlightedText>;
}

export const LargeText = () => {
  return (
    <div style={{ fontSize: 20 }}>
      Use <HighlightedText>highlighted text</HighlightedText> to highlight code
    </div>
  );
};

export function SmallText() {
  return (
    <div style={{ fontSize: 18 }}>
      Use <HighlightedText>highlighted text</HighlightedText> to highlight code
    </div>
  );
}
