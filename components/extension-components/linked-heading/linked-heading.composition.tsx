import React from "react";
import { LinkedHeading } from "./linked-heading";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

export const Default = () => {
  return (
    <ClientContext>
      <LinkedHeading link="link">Default title</LinkedHeading>
    </ClientContext>
  );
};
export const Large = () => {
  return (
    <ClientContext>
      <LinkedHeading size='xl' link="link">Large</LinkedHeading>
    </ClientContext>
  );
};
export const Small = () => {
  return (
    <ClientContext>
      <LinkedHeading size='xs' link="link">Small</LinkedHeading>
    </ClientContext>
  );
};
