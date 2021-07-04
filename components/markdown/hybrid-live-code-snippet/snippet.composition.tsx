import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Snippet } from './snippet';

const code = `<div>simple div element</div>`;

export const SnippetExample = () => {
  return (
    <ThemeCompositions>
      <Snippet>{code}</Snippet>
    </ThemeCompositions>
  );
};

export const SnippetLiveExample = () => {
  return (
    <ThemeCompositions style={{ width: 600, height: 100 }}>
      <Snippet live>{code}</Snippet>
    </ThemeCompositions>
  );
};
