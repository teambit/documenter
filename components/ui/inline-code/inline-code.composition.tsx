import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { InlineCode } from './inline-code';

export function Preview() {
  return <InlineCode>highlighted text</InlineCode>;
}

export const LargeText = () => {
  return (
    <ThemeCompositions>
      <div style={{ fontSize: 20 }}>
        Use <InlineCode>highlighted text</InlineCode> to highlight code
      </div>
    </ThemeCompositions>
  );
};

export function SmallText() {
  return (
    <ThemeCompositions>
      <div style={{ fontSize: 18 }}>
        Use <InlineCode>highlighted text</InlineCode> to highlight code
      </div>
    </ThemeCompositions>
  );
}
