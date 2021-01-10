import React from 'react';
import { CodeSnippet } from './code-snippet';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

const codeString = `export function Anchor(props: AnchorProps) {
  return (
    <a {...props} id={props.href} href={href} className={styles.anchor}>
      <Icon of="anchor" className={styles.anchorIcon}></Icon>
    </a>
  );
}`;

export const CodeSnippetExample = () => {
  return (
    <ThemeCompositions>
      <CodeSnippet>{codeString}</CodeSnippet>
    </ThemeCompositions>
  );
};