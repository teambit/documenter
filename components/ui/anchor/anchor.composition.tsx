import React from 'react';
import { Anchor } from './anchor';
import { H1 } from '@teambit/documenter.ui.heading';

export const AnchorComponentWithHeading = () => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <H1 style={{ marginRight: '10px' }}>example</H1>
      <Anchor href="example" />
    </div>
  );
};

export const SimpleAnchor = () => {
  return <Anchor href="example" />;
};

SimpleAnchor.canvas = {
  width: 50,
};
