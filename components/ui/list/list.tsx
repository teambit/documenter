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
  /**
   * controls the space between li's
   */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
} & React.OlHTMLAttributes<HTMLOListElement>;

/**
 * A list component. Can be an ordered or an un-ordered list.
 */
export function List({className, itemClass, children, element, spacing, ...rest}: ListProps) {
  const Element = element || 'ul';
  return (
    <Element {...rest} className={classNames(styles.list, styles[spacing || 'none'], className)}>
      {children.map((item, index) => <li key={index} className={classNames(styles.item, itemClass)}>{item}</li>)}
    </Element>
  );
}

List.defaultProps = {
  element: 'ul'
}