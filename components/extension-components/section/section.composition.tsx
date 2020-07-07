import React from "react";
import { Section } from "./section";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

export const Xxs = () => {
  return (
    <ClientContext>
      <Section>
          section content
      </Section>
    </ClientContext>
  );
};