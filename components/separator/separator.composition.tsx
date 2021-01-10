import React from 'react';
import { Separator } from './separator';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

// tODO - make text stay single line
export const SeapartorExample = () => {
  return (
    <ThemeCompositions>
      <div>
        <Separator style={{ width: '100%' }} />
      </div>
    </ThemeCompositions>
  );
};
