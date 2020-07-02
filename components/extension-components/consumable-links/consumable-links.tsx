import React from "react";
import classNames from "classnames";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { Grid } from "@bit/bit.base-ui.layout.grid-component";
import { CopyBox } from "@bit/bit.test-scope.ui.copy-box";
import styles from "./consumable-links.module.scss";
import { Paragraph } from "@bit/bit.base-ui.text.paragraph";

export type ConsumableLinksData = {
  /**
   * the title of the consumable link
   */
  title: string;
  /**
   * the consumable link to be copied to your clipboard
   */
  link: string;
};

/**
 * a component to specify and allow users to copy the consumable links of a component
 */
export type ConsumableLinksProps = {
  /**
   * an array of titles and links for all your consumable links
   */
  data: ConsumableLinksData[]; // TODO - find a better name than 'data'
} & React.HTMLAttributes<HTMLDivElement>;

export function ConsumableLinks({
  data,
  className,
  ...rest
}: ConsumableLinksProps) {
  return (
    <div className={className} {...rest}>
      {data.map((method, index) => (
        <Grid key={index} colMd={2} className={classNames(styles.copyMethod)}>
          <Paragraph className={styles.copyTitle} size={PossibleSizes.sm}>
            {method.title}
          </Paragraph>
          <CopyBox className={styles.copyBox}>{method.link}</CopyBox>
        </Grid>
      ))}
    </div>
  );
}
