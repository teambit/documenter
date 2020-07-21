import React from 'react';
import classNames from 'classnames';
import styles from './list.module.scss';

type ListProps = {
  /**
   * an array of the children to be displayed in the list
   */
  children: React.ReactNode[];
  /**
   * the list element to be used. <ul> by default
   */
  element?: 'ol' | 'ul';
  /**
   * override styles of the items in the list
   */
  itemClass?: string;
} & React.OlHTMLAttributes<HTMLOListElement>;

/**
 * A list component. Can be an ordered or an un-ordered list.
 */
export function List({className, itemClass, children, element, ...rest}: ListProps) {
  const Element = element || 'ul';
  return (
    <Element {...rest} className={classNames(styles.list, className)}>
      {children.map((item) => <li className={classNames(styles.item, itemClass)}>{item}</li>)}
    </Element>
  );
}

List.defaultProps = {
  element: 'ul'
}