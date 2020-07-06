import React from "react";
import { Anchor } from "./anchor";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";
import { H1 } from "@bit/bit.test-scope.ui.heading";

export const AnchorComponentWithHeading = () => {
  return (
    <ClientContext>
      <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <H1 style={{marginRight: '10px'}}>example anchor</H1>
        <Anchor href="example" />
      </div>
    </ClientContext>
  );
};

export const AnchorComponent = () => {
  return (
    <ClientContext>
        <Anchor href="example" />
    </ClientContext>
  );
};

AnchorComponent.canvas = {
  margin: 'auto',
  width: 200
}

