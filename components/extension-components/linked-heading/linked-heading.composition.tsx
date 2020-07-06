import React from "react";
import { LinkedHeading } from "./linked-heading";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

export const Default = () => {
  return (
    <ClientContext>
      <LinkedHeading title="default" link="link" />
    </ClientContext>
  );
};
export const Large = () => {
  return (
    <ClientContext>
      <LinkedHeading size='xl' title="large" link="link" />
    </ClientContext>
  );
};
export const Small = () => {
  return (
    <ClientContext>
      <LinkedHeading size='xs' title="small" link="link" />
    </ClientContext>
  );
};
