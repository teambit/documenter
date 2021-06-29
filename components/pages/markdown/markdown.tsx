import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { components } from './components';

export type MarkdownProps = {
  children: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Markdown({ children }: MarkdownProps) {
  const childrenWithLineEndings = useRegularNewlines(children);

  return (
    <div style={{ lineHeight: 1.5 }}>
      <ReactMarkdown components={components} >
        {childrenWithLineEndings}
      </ReactMarkdown>
    </div>
  );
}

// I would use negative lookbehind `(?<! )`, but it's not supported in safari
const newlineRegex = /([^ ]) $/;
const mdNewline = '  ';
const replaceTarget = `$1${mdNewline}`;

function useRegularNewlines(mdText: string) {
  return useMemo(() => mdText.replace(newlineRegex, replaceTarget), [mdText]);
}
