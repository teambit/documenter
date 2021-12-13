import React from 'react';
import { Table } from './table';

export const PropertyTableExample = () => {
  return <Table headings={tableData.headings} rows={tableData.rows} />;
};

const tableData = {
  headings: ['name', 'type', 'default', 'description'],
  rows: [
    {
      name: 'heading',
      type: 'ElementType',
      description: 'An element type to render as (string or function).',
      required: true,
      default: { value: '20 minutes' },
    },
    {
      name: 'paragrapg',
      type: 'ElementType',
      description: 'An element type to render.',
      required: true,
      default: { value: '20 minutes' },
    },
    {
      name: 'as',
      type: 'ElementType',
      description: 'An element type to render.',
      required: true,
      default: { value: '20 minutes' },
    },
  ],
};
