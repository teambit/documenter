import React from 'react';
import { Td } from '@teambit/documenter.ui.table.td';

import { Tr } from './tr';
export const TrExample = () => {
  return (
    <table>
      <tbody>
        <Tr>
          <Td>Tr text</Td>
          <Td>Tr text</Td>
          <Td>Tr text</Td>
        </Tr>
      </tbody>
    </table>
  );
};
