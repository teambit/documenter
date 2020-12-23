import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { Td } from "@teambit/documenter.ui.table.td";

import { Tr } from "./tr";
export const TrExample = () => {
  return (
    <ThemeContext>
      <Tr>
        <Td>Tr text</Td>
        <Td>Tr text</Td>
        <Td>Tr text</Td>
      </Tr>
    </ThemeContext>
  );
};
