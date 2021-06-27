import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Sup } from './sup';

export const SupExample = () => {
  return (
    <ThemeCompositions>
      <>
        <Sup>superscript text example</Sup> next to regular text
      </>
    </ThemeCompositions>
  );
};
