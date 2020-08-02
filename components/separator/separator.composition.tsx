import React from "react";
import { Separator } from "./separator";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

// tODO - make text stay single line
export const SeapartorExample = () => {
  return (
    <ThemeContext>
      <div >
      <Separator style={{width: '100%'}} />
      </div>
    </ThemeContext>
  );
};