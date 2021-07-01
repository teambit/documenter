import React, { useMemo, ReactNode } from 'react';
import {
  InlineCode,
  InlineCodeProps,
} from '@teambit/documenter.ui.inline-code';
import {
  CodeSnippet,
  CodeSnippetProps,
} from '@teambit/documenter.ui.code-snippet';

type MdProps = { node: any; inline?: boolean; children: ReactNode };
export type SnippetProps = MdProps &
  (Omit<InlineCodeProps, 'children'> | Omit<CodeSnippetProps, 'children'>);

const languageRegex = /language-(\w+)/;

/** Markdown-react code snippet */
export function Code({ inline, children, node, ...rest }: SnippetProps) {
  const stringifiedChildren = useMemo(
    () => children?.toString().replace(/\n$/, '') || '',
    [children]
  );
  const language = useMemo(
    () => languageRegex.exec(rest.className)?.[1],
    [rest.className]
  );

  if (inline) {
    return <InlineCode {...rest} children={stringifiedChildren} />;
  } else {
    return (
      <CodeSnippet
        {...rest}
        children={stringifiedChildren}
        language={language}
      />
    );
  }
}
