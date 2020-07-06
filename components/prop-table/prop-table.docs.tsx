import React from "react";
import classNames from "classnames";
import { PropTable } from "@bit/bit.test-scope.ui.property-table";
import { Paragraph } from "@bit/bit.test-scope.ui.paragraph";
import { H1 } from "@bit/bit.test-scope.ui.heading";
import { ConsumableLink } from "@bit/bit.test-scope.ui.consumable-links";
import { LinkedHeading } from "@bit/bit.test-scope.ui.linked-heading";
import { HighlightedText } from "@bit/bit.test-scope.ui.highlighted-text";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { VersionTag } from "@bit/bit.test-scope.ui.version-tag";
import { Subtitle } from "@bit/bit.test-scope.ui.sub-title";
import { Separator } from "@bit/bit.test-scope.ui.separator";
import { Label } from "@bit/bit.test-scope.ui.label";
import { Section } from "@bit/bit.test-scope.ui.section";
import styles from "./prop-table.module.scss";
import spacing from "./docs-spacer.module.scss";

const tableData = {
  headings: ["name", "type", "defaultValue", "description"],
  rows: [
    {
      name: "as",
      type: "ElementType",
      required: true,
      defaultValue: "20 minutes",
      description: "An element type to render as (string or function).",
    },
    {
      name: "as",
      type: "ElementType",
      required: true,
      defaultValue: "20 minutes",
      description: "An element type to render.",
    },
    {
      name: "as",
      type: "ElementType",
      required: true,
      defaultValue: "20 minutes",
      description: "An element type to render.",
    },
  ],
};

const consumableLink1 = {
  title: "install package",
  link: "@google.material-ui/radio",
};
const consumableLink2 = {
  title: "Import from CDN",
  link: "https://esm.bit.dev/@google/material-ui/radio/",
};

export default () => {
  return (
    <div className={spacing.docsStyles}>
      <div className={classNames(styles.titleRow, spacing.mainTitleMargin)}>
        <H1
          size={PossibleSizes.lg}
          className={classNames(styles.mainTitle, styles.marginRight)}
        >
          {title}
        </H1>
        <VersionTag />
      </div>
      <Subtitle
        className={classNames(spacing.paragraphMargin, styles.maxWidth)}
      >
        {abstract}
      </Subtitle>
      <Section className={spacing.paragraphMargin}>
        {labels.map((x) => (
          <Label className={styles.marginRight} key={x}>
            {x}
          </Label>
        ))}
      </Section>
      <Separator className={spacing.paragraphMargin} />
      <Section className={classNames(styles.maxWidth, styles.sectionMargin)}>
        <ConsumableLink
          {...consumableLink1}
          className={spacing.paragraphMargin}
        />
        <ConsumableLink
          {...consumableLink2}
          className={spacing.paragraphMargin}
        />
        <Paragraph>
          You can set the type of the choice to be either a radio or a checkbox.
          Using radio type allows you to use Choice component inside Google’s
          Choice Group.
        </Paragraph>
      </Section>
      <Section className={classNames(styles.sectionMargin)}>
        <LinkedHeading
          title="Simulations"
          link="simulations"
          className={spacing.secondaryTitleMargin}
        />
        <GreyCube />
      </Section>
      <Section className={classNames(styles.sectionMargin)}>
        <LinkedHeading
          title="Examples"
          link="examples"
          className={spacing.secondaryTitleMargin}
        />
        <LinkedHeading
          title="RadioGroup"
          size="xs"
          link="radio-group"
          className={spacing.secondaryTitleMargin}
        />
        <Paragraph
          className={classNames(spacing.paragraphMargin, styles.maxWidth)}
        >
          <HighlightedText element="span" size={PossibleSizes.xs}>
            RadioGroup
          </HighlightedText>{" "}
          is a helpful wrapper used to group{" "}
          <HighlightedText element="span" size={PossibleSizes.xs}>
            radio
          </HighlightedText>{" "}
          components that provides an easier API, and proper keyboard
          accessibility to the group.
        </Paragraph>
        <GreyCube />
      </Section>
      <Section className={classNames(styles.sectionMargin)}>
        <LinkedHeading
          title="Properties"
          link="properties"
          className={spacing.secondaryTitleMargin}
        />
        <PropTable headings={tableData.headings} rows={tableData.rows} />
      </Section>
    </div>
  );
};

export const labels = ["chart", "graph", "ui-component", "react"]; // docs are also auto-generated through an extension.

export const title = "Radio";

export const abstract =
  "Radio Buttons are graphical interface elements that allow user to choose only one of a predefined set of mutually exclusive options.";

// this is just a placeholder component
function GreyCube() {
  return <div style={{ height: "100px", backgroundColor: "#f6f6f6" }}></div>;
}
