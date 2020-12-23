import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { Sup } from "./sup";
export const SupExample = () => {
  return (
    <ThemeContext>
      <>
      <Sup>superscript text example</Sup> next to regular text
      </>
    </ThemeContext>
  );
};
