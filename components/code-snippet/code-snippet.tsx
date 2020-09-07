import React, { useState } from 'react';
import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';

import { Icon } from '@teambit/evangelist.elements.icon';
import { CopiedMessage } from '@teambit/documenter.ui.copied-message';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/';

import styles from './code-snippet.module.scss';

type CodeSnippetProps = {
  /**
   * the code string to show and to be copied to clipboard
   */
  children: string;
  /**
   * a class to override the highlighter class
   */
  frameClass?: string;
  /**
   * the theme to be used in the highlighter
   */
  theme?: any;
} & SyntaxHighlighterProps;
// & React.HTMLAttributes<HTMLDivElement> &

/**
 * A code snippet component
 */
export function CodeSnippet({
  className,
  frameClass,
  theme,
  children,
  ...rest
}: CodeSnippetProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    copy(children.toString());
  };
  return (
    <div className={classNames(styles.snippetWrapper, className)}>
      <SyntaxHighlighter
        {...rest}
        className={classNames(styles.codeSnippet, frameClass)}
        language="tsx"
        style={theme || atomOneDark}
      >
        {children}
      </SyntaxHighlighter>
      <Icon onClick={handleClick} className={styles.copyIcon} of="copy-cmp" />
      <CopiedMessage show={isCopied} />
    </div>
  );
}
