import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";

import { Td } from "./td";
export const TdExample = () => {
  return (
    <ThemeContext>
      <Td>Td text</Td>
    </ThemeContext>
  );
};
