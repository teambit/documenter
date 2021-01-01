import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import 'reset-css';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import sizes from './sizes.module.scss';
import global from './global.module.scss'; // TODO - rename

export type ThemeDocumenterProps = {} & HTMLAttributes<HTMLDivElement>;

export function ThemeDocumenter({
  children,
  className,
  ...rest
}: ThemeDocumenterProps) {
  return (
    <Theme
      {...rest}
      className={classNames(className, sizes.heading, global.overrides)}
    >
      {children}
    </Theme>
  );
}

/**
 * @deprecated
 */
export { ThemeDocumenter as ThemeContext };
