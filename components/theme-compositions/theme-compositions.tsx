import React from 'react';
import classNames from 'classnames';
import { EvaIconFont } from '@teambit/evangelist.theme.icon-font';
import {
  ThemeDocumenter,
  ThemeDocumenterProps,
} from '@teambit/documenter.theme.theme-context';

import styles from './theme-compositions.module.scss';

const ICON_MOON_VERSION = 'mxd7i0';

export type ThemeCompositionsProps = {} & ThemeDocumenterProps;

export const ThemeCompositions = ({
  children,
  ...rest
}: ThemeCompositionsProps) => {
  return (
    <ThemeDocumenter {...rest} className={classNames(styles.center)}>
      <EvaIconFont query={ICON_MOON_VERSION} />
      {children}
    </ThemeDocumenter>
  );
};
