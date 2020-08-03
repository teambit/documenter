import React, { useState } from "react";
import classNames from "classnames";
import copy from "copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Icon } from "@teambit/evangelist-temp.elements.icon";
import { CopiedMessage } from "@teambit/documenter-temp.ui.copied-message";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from "./code-snippet.module.scss";

type CodeSnippetProps = {
  /**
   * the code string to show and to be copied to clipboard
   */
  codeString: string;
  /**
   * a class to override the highlighter class
   */
  frameClass?: string;
  /**
   * the theme to be used in the highlighter
   */
  theme?: any;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A code snippet component
 */
export function CodeSnippet({
  className,
  codeString,
  frameClass,
  theme,
}: CodeSnippetProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    copy(codeString);
  };
  return (
    <div className={classNames(styles.snippetWrapper, className)}>
      <SyntaxHighlighter
        className={classNames(styles.codeSnippet, frameClass)}
        language="ts"
        style={theme || atomOneDark}
      >
        {codeString}
      </SyntaxHighlighter>
      <Icon onClick={handleClick} className={styles.copyIcon} of="copy-cmp" />
      <CopiedMessage show={isCopied} />
    </div>
  );
}
