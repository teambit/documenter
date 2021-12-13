import React from 'react';
import { PropTable } from './prop-table';

// tODO - make text stay single line
export const PropertyTableExample = () => {
  return (
    <div style={{ minWidth: '600px' }}>
      <PropTable rows={tableData.rows} listViewResolution={300} />
    </div>
  );
};

export const PropertyTableListView = () => {
  return (
    <div style={{ minWidth: '100px' }}>
      <PropTable rows={tableData.rows} listViewResolution={700} showListView />
    </div>
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
    {
      name: 'TypographyVariants',
      type: 'TypographyVariants.Headline1 | TypographyVariants.Headline2 | TypographyVariants.Headline3',
      description: 'size of the element',
      required: true,
      default: { value: '20' },
    },
  ],
};

PropertyTableExample.canvas = {
  width: '800px',
};
