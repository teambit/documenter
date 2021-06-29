import React from 'react';
import { IconFont } from '@teambit/design.theme.icons-font';
// import 'reset-css';  // do not include, instead make sure each component resets its own styles
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
      <IconFont query={ICON_MOON_VERSION} />
      {children}
    </ThemeDocumenter>
  );
};
