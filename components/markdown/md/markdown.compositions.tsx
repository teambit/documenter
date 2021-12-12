import React from 'react';
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
    <div style={{ maxWidth: 1440, padding: 16, margin: 'auto' }}>
      <Markdown>{mdExample}</Markdown>
    </div>
  );
};

export const FullExample = () => {
  return (
    <div style={{ maxWidth: 1440, padding: 16, margin: 'auto' }}>
      <Markdown>{allMds}</Markdown>
    </div>
  );
};
