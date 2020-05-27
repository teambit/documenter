import React from 'react';
import { Logo } from './logo';

// Big logo
export const BigLogo = () => {
  return <Logo />;
};

// Small logo with color red
export const SmallLogoWithColorRed = {
  render: () => {
    return <Logo />;
  },
  width: 500,
  height: 300,
  props: {
    foo: 'bar'    
  }
};
