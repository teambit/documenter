import React, { useState } from "react";
import classNames from "classnames";
import copy from "copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Icon } from "@bit/bit.evangelist.elements.icon";
import { CopiedMessage } from "@bit/bit.test-scope.ui.copied-message";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from "./code-snippet.module.scss";

type AnchorProps = {
  /**
   * specifies the anchor link to the section
   */
  codeString: string;
  frameClass?: string;
  theme?: any;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * An anchor component with an icon for linking your docs
 */
export function CodeSnippet({
  className,
  codeString,
  frameClass,
  theme,
}: AnchorProps) {
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
