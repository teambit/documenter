import React from "react";
import { VersionTag } from "./version-tag";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";

// tODO - make text stay single line
export const LatestTagExample = () => {
  return (
    <ThemeContext>
        <VersionTag></VersionTag>
    </ThemeContext>
  )
};
export const VersionTagExample = () => {
    return (
      <ThemeContext>
          <VersionTag>10.0.1</VersionTag>
      </ThemeContext>
    )
}
