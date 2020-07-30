import React from "react";
import { Section } from "./section";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

export const Xxs = () => {
  return (
    <ThemeContext>
      <Section>
          section content
      </Section>
    </ThemeContext>
  );
};