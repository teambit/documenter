import React from "react";
import { LabelList } from "./label-list";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

const list = [
  'light label',
  'light label2'
]


export const LightLabel = () => {
  return (
    <ThemeContext>
      <LabelList>{list}</LabelList>
    </ThemeContext>
  );
};
