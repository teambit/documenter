import React from "react";
import { Section } from "./section";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";

export const Xxs = () => {
  return (
    <ThemeContext>
      <Section>
          section content
      </Section>
    </ThemeContext>
  );
};