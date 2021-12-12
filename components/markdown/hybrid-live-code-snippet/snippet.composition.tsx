import React from 'react';
import { Snippet } from './snippet';

const code = `<div>simple div element</div>`;

export const SnippetExample = () => {
  return <Snippet>{code}</Snippet>;
};

export const SnippetLiveExample = () => {
  return (
    <div style={{ width: 600, height: 100 }}>
      <Snippet live>{code}</Snippet>
    </div>
  );
};
