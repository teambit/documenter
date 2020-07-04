import React from 'react';
import classNames from 'classnames';
import { Icon } from '@bit/bit.evangelist.elements.icon';
import styles from './anchor.module.scss';

/**
 * an anchor component with an icon for linking your docs
 */
type AnchorProps = {
  /**
   * specifies the anchor link to the section
   */
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export function Anchor(props: AnchorProps) {
  const href = props.href && `#${props.href}`;
  
  return (
    <a {...props} id={props.href} href={href} className={classNames(props.className, styles.anchor)}>
      <Icon of="anchor" className={styles.anchorIcon}></Icon>
    </a>
  );
}
