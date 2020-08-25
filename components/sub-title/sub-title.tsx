import React from "react";
import classNames from "classnames";
import { mutedText } from "@teambit/base-ui.text.muted-text";
import { Paragraph } from "@teambit/documenter-temp.ui.paragraph";
import styles from "./sub-title.module.scss";

export type SubtitleProps = {} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * subtitle component
 */
export function Subtitle({ children, className, ...rest }: SubtitleProps) {
  return (
    <Paragraph
      element="p"
      className={classNames(mutedText, styles.subTitle, className)}
      size="xl"
      {...rest}
    >
      {children}
    </Paragraph>
  );
}

// Subtitle.defaultProps = {
//   element: "p",
// };
