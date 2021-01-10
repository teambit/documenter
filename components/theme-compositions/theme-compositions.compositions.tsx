import React from 'react';
import { ThemeCompositions, center } from './';

export const CenterThemeContextExample = () => (
  <ThemeCompositions className={center}>
    <div>This is a center element</div>
  </ThemeCompositions>
);

CenterThemeContextExample.canvas = {
  height: 200,
};
