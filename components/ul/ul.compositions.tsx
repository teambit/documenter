import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { Ul } from "./ul";
export const UlExample = () => {
  return (
    <ThemeContext>
      <Ul>
        <li>Ul text</li>
        <li>Ul text</li>
        <li>Ul text</li>
      </Ul>
    </ThemeContext>
  );
};
