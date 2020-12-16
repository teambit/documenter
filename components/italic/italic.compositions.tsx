import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { Italic } from "./italic";
export const ItalicExample = () => {
  return (
    <ThemeContext>
      <Italic>Italic text</Italic>
    </ThemeContext>
  );
};
