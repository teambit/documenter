import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { LinkedHeading, Sizes } from '@teambit/documenter.ui.linked-heading';
import styles from './heading.module.scss';

export function createHeading(size: Sizes) {
  return function Heading({
    children,
    className,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) {
    const isMainHeading = size === 'lg' || size === 'md';

    return (
      <LinkedHeading
        {...rest}
        className={classnames(
          className,
          styles.mdxLinkedHeading,
          isMainHeading && styles.mainHeadingStyles
        )}
        size={size}
      >
        {children}
      </LinkedHeading>
    );
  };
}
