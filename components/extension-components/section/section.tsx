import React from 'react';
import classNames from 'classnames';
import styles from './section.module.scss';

export type SectionProps = {} & React.HTMLAttributes<HTMLHeadingElement>;

export function Section({className, children, ...rest}) {
return <div className={classNames(styles.spacer, className)} {...rest}>{children}</div>
}