import React from 'react';
import classNames from 'classnames';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';
import { Paragraph, ParagraphProps } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import styles from './sub-title.module.scss';

export type SubtitleProps = {} & ParagraphProps;

/**
 * subtitle component
 */
export function Subtitle({ children, className, ...rest }: SubtitleProps) {
  return (
    <Paragraph className={classNames(mutedText, styles.maxWidth, className)} size={PossibleSizes.xxl} {...rest}>
      {children}
    </Paragraph>
  );
}