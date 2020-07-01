import React from 'react';
import classNames from 'classnames';
import styles from './version-tag.module.scss';

type VersionTagProps = React.HTMLAttributes<HTMLSpanElement>;

export function VersionTag({ children = 'Latest', className }: VersionTagProps) {
  return <span className={classNames(styles.versionTag, className)}>{children}</span>;
}
