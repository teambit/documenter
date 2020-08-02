import React from "react";
import { Anchor } from './anchor';
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";
import { H1 } from "@bit/bit.test-scope.ui.heading";

export const AnchorComponentWithHeading = () => {
  return (
    <ThemeContext>
      <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <H1 style={{marginRight: '10px'}}>example</H1>
        <Anchor href="example" />
      </div>
    </ThemeContext>
  );
};

export const SimpleAnchor = () => {
  return (
    <ThemeContext>
        <Anchor href="example" />
    </ThemeContext>
  );
};

SimpleAnchor.canvas = {
  width: 50
}
