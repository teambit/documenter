import React from 'react';
import classNames from 'classnames';
import { H3 } from '@bit/bit.test-scope.ui.heading';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Anchor } from '@bit/bit.test-scope.ui.anchor';
import styles from './linked-heading.module.scss';

export type LinkedHeadingProps = {
  /**
   * title string
   */
  title: string,
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
  className: string
};

/**
 * section heading with anchor link
 */
export function LinkedHeading({title, link, size, className, ...rest}: LinkedHeadingProps) {
  
  return (
    <div className={classNames(styles.linkedHeading, className)} {...rest}>
      <H3 className={styles.heading} size={PossibleSizes[size || 'sm']}>{title}</H3>
      <Anchor className={styles.anchor} href={link}></Anchor>
    </div>
  );
}
