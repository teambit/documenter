import React from 'react';
import classNames from 'classnames';
import { H1, H2, H3, H4, H5 } from '@teambit/documenter.ui.heading';
import type { Sizes } from '@teambit/documenter.ui.heading';
import { Anchor } from '@teambit/documenter.ui.anchor';
import styles from './linked-heading.module.scss';

export type { Sizes };
export type LinkedHeadingProps = {
  /**
   * title string
   */
  children: React.ReactNode;

  /**
   * anchor link to section
   */
  link?: string;

  /**
   * font size override for title string [optional]
   */
  size?: Sizes;

  /**
   * class name to attach.
   */
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * section heading with anchor link
 */
export function LinkedHeading({ children, link, size, className, ...rest }: LinkedHeadingProps) {
  const Element = headerBySizes(size);
  return (
    <div className={classNames(styles.linkedHeading, className)} {...rest}>
      <Element className={styles.heading} size={size || 'sm'} id={link}>
        {children}
      </Element>
      {link && <Anchor className={styles.anchor} href={link}></Anchor>}
    </div>
  );
}

const headerBySizes = (size?: Sizes) => {
  switch (size) {
    case 'lg':
      return H1;
    case 'md':
      return H2;
    case 'sm':
      return H3;
    case 'xs':
      return H4;
    case 'xxs':
      return H5;
    default:
      return H3;
  }
};
