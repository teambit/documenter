import React from 'react';
import { ThemeCompositions, center } from './';

export const CenterThemeCompositionsExample = () => (
  <ThemeCompositions className={center}>
    <div>This is a center element</div>
  </ThemeCompositions>
);

CenterThemeCompositionsExample.canvas = {
  height: 200,
};
