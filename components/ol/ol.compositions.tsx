import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { Ol } from "./ol";
export const OlExample = () => {
  return (
    <ThemeContext>
      <Ol>
        <li>Ol text</li>
        <li>Ol text</li>
        <li>Ol text</li>
      </Ol>
    </ThemeContext>
  );
};
