import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Td } from '@teambit/documenter.ui.table.td';

import { Tr } from './tr';
export const TrExample = () => {
  return (
    <ThemeCompositions>
      <table>
        <tbody>
          <Tr>
            <Td>Tr text</Td>
            <Td>Tr text</Td>
            <Td>Tr text</Td>
          </Tr>
        </tbody>
      </table>
    </ThemeCompositions>
  );
};
