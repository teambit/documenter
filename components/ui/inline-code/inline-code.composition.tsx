import React from 'react';
import { InlineCode } from './inline-code';

export function Preview() {
  return <InlineCode>inline-code</InlineCode>;
}

export const LargeText = () => {
  return (
    <div style={{ fontSize: 20 }}>
      Use <InlineCode>highlighted text</InlineCode> to insert code
    </div>
  );
};

export const Highlighted = () => {
  return (
    <div>
      Use <InlineCode highlight>highlighted text</InlineCode> to highlight code
    </div>
  );
};
