import React from 'react';
import { Anchor } from './anchor';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { H1 } from '@teambit/documenter.ui.heading';

export const AnchorComponentWithHeading = () => {
  return (
    <ThemeCompositions>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <H1 style={{ marginRight: '10px' }}>example</H1>
        <Anchor href="example" />
      </div>
    </ThemeCompositions>
  );
};

export const SimpleAnchor = () => {
  return (
    <ThemeCompositions>
      <Anchor href="example" />
    </ThemeCompositions>
  );
};

SimpleAnchor.canvas = {
  width: 50,
};
