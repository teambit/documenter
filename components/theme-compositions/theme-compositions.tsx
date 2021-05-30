import React from 'react';
import { EvaIconFont } from '@teambit/evangelist.theme.icon-font';
import 'reset-css';
import {
  ThemeDocumenter,
  ThemeDocumenterProps,
} from '@teambit/documenter.theme.theme-context';

const ICON_MOON_VERSION = 'mxd7i0';

export type ThemeCompositionsProps = {} & ThemeDocumenterProps;

export const ThemeCompositions = ({
  children,
  ...rest
}: ThemeCompositionsProps) => {
  return (
    <ThemeDocumenter {...rest}>
      <EvaIconFont query={ICON_MOON_VERSION} />
      {children}
    </ThemeDocumenter>
  );
};
