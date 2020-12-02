import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { ImportAction } from "./import-action";

export const ImportActionExample = () => {
  return (
    <ThemeContext>
      <div style={styles}>
        <ImportAction
          componentName="Import-action"
          bitLink="teambit.documenter/ui/import-action"
          packageLink="@teambit/documenter.ui.import-action"
          registryName="@teambit"
        />
      </div>
    </ThemeContext>
  );
};

ImportActionExample.canvas = {
  height: "300px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
};
const styles = {
  width: "400px",
};
