import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import type { LinkedHeadingProps, Sizes, Element } from '@teambit/documenter.ui.linked-heading';
import styles from './create-heading.module.scss';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & LinkedHeadingProps;

export function createHeading(size: Sizes, element?: Element) {
  return function Heading({ children, className, ...rest }: HeadingProps) {
    const isMainHeading = size === 'lg' || size === 'md';
    return (
      <LinkedHeading
        {...rest}
        className={classnames(className, styles.mdxLinkedHeading, isMainHeading && styles.mainHeadingStyles)}
        size={size}
        element={element}
      >
        {children}
      </LinkedHeading>
    );
  };
}

export const h1 = createHeading('lg', 'h1');
export const h2 = createHeading('md', 'h2');
export const h3 = createHeading('sm', 'h3');
export const h4 = createHeading('xs', 'h4');
export const h5 = createHeading('xxs', 'h5');
export const h6 = createHeading('xxs', 'h6');
