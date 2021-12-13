import React from 'react';
import { LabelList } from './label-list';

const list = ['light label', 'light label2'];

export const LightLabel = () => {
  return <LabelList>{list}</LabelList>;
};
