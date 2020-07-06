import React from "react";
import { Anchor } from "./anchor";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";
import { H1 } from "@bit/bit.test-scope.ui.heading";

export const AnchorComponent = () => {
  return (
    <ClientContext>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <H1 style={{marginRight: '10px'}}>example anchor</H1>
        <Anchor href="example" />
      </div>
    </ClientContext>
  );
};

// AnchorComponent.canvas = {
//   width: 300,
//   height: 200,
// };
