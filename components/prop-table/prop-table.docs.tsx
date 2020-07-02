import React from "react";
import classNames from "classnames";
import { PropTable } from "@bit/bit.test-scope.ui.property-table";
import { Paragraph } from "@bit/bit.base-ui.text.paragraph";
import { H1 } from "@bit/bit.evangelist.elements.heading";
import { ConsumableLinks } from "@bit/bit.test-scope.ui.consumable-links";
import { LinkedHeading } from "@bit/bit.test-scope.ui.linked-heading";
import { HighlightedText } from "@bit/bit.test-scope.ui.highlighted-text";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { VersionTag } from "@bit/bit.test-scope.ui.version-tag";
import { Subtitle } from "@bit/bit.test-scope.ui.sub-title";
import { Separator } from "@bit/bit.test-scope.ui.separator";
import { Label } from "@bit/bit.test-scope.ui.label";
import styles from "./prop-table.module.scss";

const tableData = {
  headings: ["name", "type", "description", "required", "defaultValue"],
  rows: [
    {
      name: "as",
      type: "ElementType",
      description: "20 minutes",
      required: true,
      defaultValue: "An element type to render as (string or function).",
    },
    {
      name: "as",
      type: "ElementType",
      description: "20 minutes",
      required: true,
      defaultValue: "An element type to render as (string or function).",
    },
    {
      name: "as",
      type: "ElementType",
      description: "20 minutes",
      required: true,
      defaultValue: "An element type to render as (string or function).",
    },
  ],
};

const consumableLinks = [
  { title: "install package", link: "@google.material-ui/radio" },
  {
    title: "Import from CDN",
    link: "https://esm.bit.dev/@google/material-ui/radio/",
  },
];

export default () => {
  return (
    <div>
      <div className={styles.topRow}>
        <H1 size={PossibleSizes.lg} className={styles.marginRight}>{title}</H1>
        <VersionTag />
      </div>
      <Subtitle className={styles.marginBottom}>{abstract}</Subtitle>
      <div className={styles.marginBottom}>
        {labels.map((x) => (
          <Label className={styles.marginRight} key={x}>
            {x}
          </Label>
        ))}
      </div>
      <Separator className={styles.marginBottom} />
      <div className={classNames(styles.maxWidth, styles.marginBottom)}>
        <ConsumableLinks data={consumableLinks} />
        <Paragraph>
          You can set the type of the choice to be either a radio or a checkbox.
          Using radio type allows you to use Choice component inside Google’s
          Choice Group.
        </Paragraph>
      </div>
      <div className={classNames(styles.marginBottom)}>
        <LinkedHeading title="Simulations" link="simulations" />
        <GreyCube />
      </div>
      <div className={classNames(styles.marginBottom)}>
        <LinkedHeading title="Examples" link="examples" />
        <LinkedHeading title="RadioGroup" size="xs" link="radio-group" />
        <Paragraph className={classNames(styles.marginBottom, styles.maxWidth)}>
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
      </div>
      <LinkedHeading title="Properties" link="properties" />
      <PropTable headings={tableData.headings} rows={tableData.rows} />
    </div>
  );
};

export const labels = ["property table", "props", "properties"]; // docs are also auto-generated through an extension.

export const title = "Title";

export const abstract = "property table for documenting components";

// this is just a placeholder component
function GreyCube() {
  return <div style={{ height: "100px", backgroundColor: "#f6f6f6" }}></div>;
}
