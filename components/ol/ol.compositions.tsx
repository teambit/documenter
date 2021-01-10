import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Ol } from './ol';

export const OlExample = () => {
  return (
    <ThemeCompositions>
      <Ol>
        <li>Ol text</li>
        <li>Ol text</li>
        <li>Ol text</li>
      </Ol>
    </ThemeCompositions>
  );
};
