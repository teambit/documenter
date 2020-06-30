import React from 'react';
import { H3 } from "@bit/bit.evangelist.elements.heading";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { Anchor } from "@bit/bit.test-scope.ui.anchor";
import styles from './linked-heading.module.scss';

type LinkedHeadingProps = {
  /**
   * title string
   */
  title: string;
  /**
   * anchor link to section
   */
  link: string;
  /**
   * font size override for title string [optional]
   */
  size?: string;
}

/**
 * section heading with anchor link
 */
export function LinkedHeading({title, link, size}: LinkedHeadingProps) {
  
  return (
    <div className={styles.linkedHeading}>
      <H3 className={styles.heading} size={PossibleSizes[size || 'sm']}>{title}</H3>
      <Anchor href={link}></Anchor>
    </div>
  );
}
