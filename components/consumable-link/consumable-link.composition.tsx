import React from "react";

import { ConsumableLink } from "./consumable-link";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

const link = {
  title: "import using bit",
  link: "bit import @bit.bit/test-scope/consumable-link",
};
const link2 = {
  title: "install with npm",
  link: "npm install @bit.bit.test-scope.consumable-link",
};
export const BitImportExample = () => {
  return (
    <ThemeContext>
      <div style={styles}>
        <ConsumableLink {...link} />
      </div>
    </ThemeContext>
  );
};

export const NpmInstallExample = () => {
  return (
    <ThemeContext>
      <div style={styles}>
        <ConsumableLink {...link2} />
      </div>
    </ThemeContext>
  );
};


// ExampleLinks.canvas = {
//   width: 300,
//   height: 300,
// };

const styles = {
  minWidth: "700px",
  margin: "auto",
  marginTop: "20px",
};
