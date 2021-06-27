import React from 'react';
import { VersionTag } from './version-tag';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

// tODO - make text stay single line
export const LatestTagExample = () => {
  return (
    <ThemeCompositions>
      <VersionTag></VersionTag>
    </ThemeCompositions>
  );
};
export const VersionTagExample = () => {
  return (
    <ThemeCompositions>
      <VersionTag>10.0.1</VersionTag>
    </ThemeCompositions>
  );
};
