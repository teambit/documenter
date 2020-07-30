import React from "react";
import { LinkedHeading } from "./linked-heading";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

export const Large = () => {
  return (
    <ClientContext>
      <LinkedHeading size='xl' link="link">large</LinkedHeading>
    </ClientContext>
  );
};
export const Default = () => {
  return (
    <ClientContext>
      <LinkedHeading link="link">default</LinkedHeading>
    </ClientContext>
  );
};
export const Small = () => {
  return (
    <ClientContext>
      <LinkedHeading size='xs' link="link">small</LinkedHeading>
    </ClientContext>
  );
};
