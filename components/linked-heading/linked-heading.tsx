import React from 'react';
import classNames from 'classnames';
import { H3 } from '@teambit/documenter-temp.ui.heading';
import { PossibleSizes } from '@teambit/base-ui-temp.theme.sizes';
import { Anchor } from '@teambit/documenter-temp.ui.anchor';
import styles from './linked-heading.module.scss';

export type LinkedHeadingProps = {
  /**
   * title string
   */
  children: React.ReactNode,
  /**
   * anchor link to section
   */
  link: string,

  /**
   * font size override for title string [optional]
   */
  size?: string

  /**
   * class name to attach.
   */
  className?: string
};

/**
 * section heading with anchor link
 */
export function LinkedHeading({ children, link, size, className, ...rest }: LinkedHeadingProps) {
  return (
    <div className={classNames(styles.linkedHeading, className)} {...rest}>
      <H3 className={styles.heading} size={PossibleSizes[size || 'sm']}>{children}</H3>
      <Anchor className={styles.anchor} href={link}></Anchor>
    </div>
  );
}
