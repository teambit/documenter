import React from "react";
import { Subtitle } from "./sub-title";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";

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