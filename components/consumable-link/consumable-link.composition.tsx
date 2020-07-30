import React from "react";

import { ConsumableLink } from "./consumable-link";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

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
    <ClientContext>
      <div style={styles}>
        <ConsumableLink {...link} />
      </div>
    </ClientContext>
  );
};

export const NpmInstallExample = () => {
  return (
    <ClientContext>
      <div style={styles}>
        <ConsumableLink {...link2} />
      </div>
    </ClientContext>
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
