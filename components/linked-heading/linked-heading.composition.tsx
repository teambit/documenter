import React from "react";
import { LinkedHeading } from "./linked-heading";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";

export const Large = () => {
  return (
    <ThemeContext>
      <LinkedHeading size='xl' link="link">large</LinkedHeading>
    </ThemeContext>
  );
};
export const Default = () => {
  return (
    <ThemeContext>
      <LinkedHeading link="link">default</LinkedHeading>
    </ThemeContext>
  );
};
export const Small = () => {
  return (
    <ThemeContext>
      <LinkedHeading size='xs' link="link">small</LinkedHeading>
    </ThemeContext>
  );
};
