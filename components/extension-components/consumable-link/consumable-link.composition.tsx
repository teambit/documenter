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
export const ExampleLinks = () => {
  return (
    <ClientContext>
      <div style={styles}>
        <ConsumableLink {...link} />
      </div>
    </ClientContext>
  );
};

export const ExampleLinks2 = () => {
  return (
    <ClientContext>
      <div style={styles}>
        <ConsumableLink {...link2} />
      </div>
    </ClientContext>
  );
};

// this does not work
ExampleLinks.canvas = {
  width: 300,
  height: 300,
};

const styles = {
  maxWidth: "80%",
  margin: "auto",
};
