import React from 'react';
import classNames from 'classnames';
import { H3, Sizes } from '@teambit/documenter-temp.ui.heading';
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
  size?: Sizes

  /**
   * class name to attach.
   */
  className?: string
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * section heading with anchor link
 */
export function LinkedHeading({ children, link, size, className, ...rest }: LinkedHeadingProps) {
  return (
    <div className={classNames(styles.linkedHeading, className)} {...rest}>
      <H3 className={styles.heading} size={size || 'sm'}>{children}</H3>
      <Anchor className={styles.anchor} href={link}></Anchor>
    </div>
  );
}
