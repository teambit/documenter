import React from 'react';
import { PropTable } from './prop-table';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

// tODO - make text stay single line
export const PropertyTableExample = () => {
  return (
    <ThemeCompositions>
      <PropTable rows={tableData.rows} />
    </ThemeCompositions>
  );
};
export const PropertyTableListView = () => {
  return (
    <ThemeCompositions>
      <PropTable rows={tableData.rows} listViewResolution={700} showListView />
    </ThemeCompositions>
  );
};

const tableData = {
  rows: [
    {
      name: 'heading',
      type: 'string',
      description: 'An element type to render as (string or function).',
      required: true,
      default: { value: 'h1' },
    },
    {
      name: 'size',
      type: 'number',
      description: 'size of the element',
      required: true,
      default: { value: '20' },
    },
    {
      name: 'options',
      type: 'Array',
      description: 'and array of override options',
      required: false,
    },
    {
      name: 'columns',
      type: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12',
      description: 'number of columns to render',
      required: true,
      default: { value: '4' },
    },
    {
      name: 'as',
      type: "'h1' | 'h2' | 'h3'",
      description: 'An element type to render.',
      required: true,
      default: { value: 'h1' },
    },
  ],
};

PropertyTableExample.canvas = {
  minWidth: '800px',
};
