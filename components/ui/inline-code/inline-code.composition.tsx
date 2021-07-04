import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { InlineCode } from './inline-code';

export function Preview() {
  return <InlineCode>inline-code</InlineCode>;
}

export const LargeText = () => {
  return (
    <ThemeCompositions>
      <div style={{ fontSize: 20 }}>
        Use <InlineCode>highlighted text</InlineCode> to insert code
      </div>
    </ThemeCompositions>
  );
};

export const Highlighted = () => {
  return (
    <ThemeCompositions>
      Use <InlineCode highlight>highlighted text</InlineCode> to highlight code
    </ThemeCompositions>
  );
};
