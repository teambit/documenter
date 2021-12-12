import React from 'react';
import classNames from 'classnames';
import styles from './copied-message.module.scss';

type AnchorProps = {
  /**
   * show the copied message component
   */
  show?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

/**
 * A component to indicate when the required text has been copied
 */
export function CopiedMessage({ className, show = false, ...rest }: AnchorProps) {
  return (
    <span
      {...rest}
      className={classNames(
        styles.copiedMessage,
        {
          [styles.showMessage]: show,
        },
        className
      )}
    >
      Copied
    </span>
  );
}
