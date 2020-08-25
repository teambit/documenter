import React from "react";
import { Label } from "./label";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";

export const LightLabel = () => {
  return (
    <ThemeContext>
      <Label>light label</Label>
    </ThemeContext>
  );
};
export const DarkLabel = () => {
  return (
    <ThemeContext>
      <Label style={{backgroundColor: '#414141', color: 'white'}}>dark label</Label>
    </ThemeContext>
  );
};

