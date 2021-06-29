import React from 'react';
import { Subtitle } from './sub-title';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

// tODO - make text stay single line
export const SubtitleExample = () => {
  return (
    <ThemeCompositions>
      <div>
        <Subtitle>A subtitle text</Subtitle>
      </div>
    </ThemeCompositions>
  );
};
