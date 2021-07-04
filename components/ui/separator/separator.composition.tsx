import React from 'react';
import { Separator } from './separator';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

// tODO - make text stay single line
export const SeparatorExample = () => {
  return (
    <ThemeCompositions>
      <Separator />
    </ThemeCompositions>
  );
};

SeparatorExample.canvas = {
  width: '100%',
};
