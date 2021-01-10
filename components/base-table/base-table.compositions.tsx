import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Td } from '@teambit/documenter.ui.table.td';

import { Tr } from '@teambit/documenter.ui.table.tr';
import { Table } from './base-table';

export const TableExample = () => {
  return (
    <ThemeCompositions>
      <Table>
        <Tr>
          <th>title1</th>
          <th>title2</th>
          <th>title3</th>
        </Tr>
        <Tr>
          <Td>cell</Td>
          <Td>cell</Td>
          <Td>cell</Td>
        </Tr>
        <Tr>
          <Td>cell</Td>
          <Td>cell</Td>
          <Td>cell</Td>
        </Tr>
      </Table>
    </ThemeCompositions>
  );
};
