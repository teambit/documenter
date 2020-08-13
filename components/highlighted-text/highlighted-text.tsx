import React from "react";
import classNames from "classnames";
import { Paragraph, ParagraphProps } from "@teambit/documenter-temp.ui.paragraph";
import styles from "./highlighted-text.module.scss";

export type HighlightedTextProps = {} & ParagraphProps;

/**
 * A <p> element with text highlighting
 */
export function HighlightedText({
  children,
  className,
  ...rest
}: HighlightedTextProps) {
  return (
    <Paragraph
      {...rest}
      className={classNames(styles.highlightedText, className)}
    >
      {children}
    </Paragraph>
  );
}