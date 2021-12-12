import React from 'react';
import { Label } from './label';

export const LightLabel = () => {
  return <Label>light label</Label>;
};

export const DarkLabel = () => {
  return <Label style={{ backgroundColor: '#414141', color: 'white' }}>dark label</Label>;
};
