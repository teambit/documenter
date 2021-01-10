import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { H1, H2, H3, H4, H5, H6 } from './heading';

export const HeadingXl = () => {
  return (
    <ThemeCompositions>
      <H1 style={{ whiteSpace: 'nowrap' }}>main header</H1>
    </ThemeCompositions>
  );
};
export const HeadingLg = () => (
  <ThemeCompositions>
    <H2 style={{ whiteSpace: 'nowrap' }}>main header</H2>
  </ThemeCompositions>
);
export const HeadingMd = () => (
  <ThemeCompositions>
    <H3 style={{ whiteSpace: 'nowrap' }}>main header</H3>
  </ThemeCompositions>
);
export const HeadingSm = () => (
  <ThemeCompositions>
    <H4 style={{ whiteSpace: 'nowrap' }}>main header</H4>
  </ThemeCompositions>
);
export const HeadingXs = () => (
  <ThemeCompositions>
    <H5 style={{ whiteSpace: 'nowrap' }}>main header</H5>
  </ThemeCompositions>
);
export const HeadingXxs = () => (
  <ThemeCompositions>
    <H6 style={{ whiteSpace: 'nowrap' }}>main header</H6>
  </ThemeCompositions>
);
