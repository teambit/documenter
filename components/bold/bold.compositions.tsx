import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { Bold } from "./bold";
export const BoldExample = () => {
  return (
    <ThemeContext>
      <Bold>bold text</Bold>
    </ThemeContext>
  );
};
