import React from "react";
import { Section } from "@teambit/documenter.ui.section";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { CodeSnippet } from "@teambit/documenter.ui.code-snippet";
import { links } from "./documentation-links";
import { H3 } from "@teambit/documenter.ui.heading";

export default function Overview() {
  const stringLinks = JSON.stringify(links).replace(/,/g, ",\n");
  return (
    <ThemeContext>
      <>
        <Section>
          <H3>The links to our docs pages</H3>
        </Section>
        <CodeSnippet>{stringLinks}</CodeSnippet>
      </>
    </ThemeContext>
  );
}

Overview.abstract = "Handles all links to docs";

Overview.labels = ["documentation", "links"];
