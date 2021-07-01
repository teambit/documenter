import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import {
  Playground,
  CodeScope,
} from '@teambit/documenter.code.react-playground';
import styles from './snippet.module.scss';

export type { CodeScope } from '@teambit/documenter.code.react-playground';

export type SnippetProps = {
  children: string;
  scope?: CodeScope;
  live?: boolean | string;
};

export function Snippet({ children, scope, live }: SnippetProps) {
  if (live) {
    return (
      <Playground className={styles.snippet} code={children} scope={scope} />
    );
  }

  return <CodeSnippet className={styles.snippet}>{children}</CodeSnippet>;
}
