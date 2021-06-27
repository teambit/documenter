import React from 'react';
import { Label } from './label';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

export const LightLabel = () => {
  return (
    <ThemeCompositions>
      <Label>light label</Label>
    </ThemeCompositions>
  );
};

export const DarkLabel = () => {
  return (
    <ThemeCompositions>
      <Label style={{ backgroundColor: '#414141', color: 'white' }}>
        dark label
      </Label>
    </ThemeCompositions>
  );
};

const List = () => {
  return (
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
  );
};
