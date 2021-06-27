import React from 'react';
import { LabelList } from './label-list';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

const list = ['light label', 'light label2'];

export const LightLabel = () => {
  return (
    <ThemeCompositions>
      <LabelList>{list}</LabelList>
    </ThemeCompositions>
  );
};
