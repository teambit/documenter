import React from "react";
import classNames from "classnames";
import { Paragraph as BaseParagraph } from "@teambit/base-ui-temp.text.paragraph";
import { PossibleSizes } from "@teambit/base-ui-temp.theme.sizes";
import styles from "./paragraph.module.scss";

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