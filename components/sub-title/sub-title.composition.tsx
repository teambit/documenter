import React from "react";
import { Subtitle } from "./sub-title";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

// tODO - make text stay single line
export const SubtitleExample = () => {
  return (
    <ThemeContext>
      <div >
      <Subtitle>A subtitile text</Subtitle>
      </div>
    </ThemeContext>
  );
};