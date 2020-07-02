import React from 'react';
import classNames from 'classnames';
import { Paragraph as BaseParagraph, ParagraphProps as BaseProps } from "@bit/bit.base-ui.text.paragraph";
import styles from './paragraph.module.scss';

/**
 * a paragraph component
 */
export type ParagraphProps = {
  
} & BaseProps;
export function Paragraph({children, className, ...rest}: ParagraphProps) {
  return (
    <BaseParagraph {...rest} className={classNames(styles.paragraph, className)}>
      {children}
    </BaseParagraph>
  );
}
