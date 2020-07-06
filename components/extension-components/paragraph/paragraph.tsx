import React from "react";
import classNames from "classnames";
import { Paragraph as BaseParagraph } from "@bit/bit.base-ui.text.paragraph";
import styles from "./paragraph.module.scss";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";

/**
 * a paragraph component
 */
export type ParagraphProps = {
  /**
   * Font size (from a list of presets).
   */
  size?: PossibleSizes;
  /**
   * The underlying html element
   */
  element?: "p" | "div" | "span";
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element.
 *
 */
export function Paragraph({ children, className, ...rest }: ParagraphProps) {
  return (
    <BaseParagraph
      {...rest}
      className={classNames(styles.paragraph, className)}
    >
      {children}
    </BaseParagraph>
  );
}

Paragraph.defaultProps = {
  size: PossibleSizes.md,
  element: 'p'
}