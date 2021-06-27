import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Ul } from './ul';

export const UlExample = () => {
  return (
    <ThemeCompositions>
      <Ul>
        <li>Ul text</li>
        <li>Ul text</li>
        <li>Ul text</li>
      </Ul>
    </ThemeCompositions>
  );
};
