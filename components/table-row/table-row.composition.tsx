import React from 'react';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { TableRow } from './table-row';

export function Basic() {
  return (
    <ThemeContext>
      <TableRow
        row={{
          name: 'columns',
          type: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12',
          description: 'number of columns to render',
          required: true,
          default: { value: '4' },
        }}
        colNumber={4}
        headings={['one', 'two', 'three', 'four']}
        isListView
      />
    </ThemeContext>
  );
}
