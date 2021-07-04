import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Markdown } from './markdown';
import { allMds } from './all-md-examples';

// import example01 from './example.txt';

const mdExample = `
# hello world
I am some text  
Some *bold* \`inline code\` text

\`\`\`
	hello world!
\`\`\`
`;

export const Preview = () => {
  return (
    <ThemeCompositions style={{ maxWidth: 1440, padding: 16, margin: 'auto' }}>
      <Markdown>{mdExample}</Markdown>
    </ThemeCompositions>
  );
};

export const FullExample = () => {
  return (
    <ThemeCompositions style={{ maxWidth: 1440, padding: 16, margin: 'auto' }}>
      <Markdown>{allMds}</Markdown>
    </ThemeCompositions>
  );
};
