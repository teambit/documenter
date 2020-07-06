import React from "react";
import classNames from "classnames";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { Grid } from "@bit/bit.base-ui.layout.grid-component";
import { CopyBox } from "@bit/bit.test-scope.ui.copy-box";
import styles from "./consumable-link.module.scss";
import { Paragraph } from "@bit/bit.base-ui.text.paragraph";


export type ConsumableLinkProps = {
  /**
   * the title of the consumable link
   */
  title: string;
  /**
   * the consumable link to be copied to your clipboard
   */
  link: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * a component to specify and allow users to copy the consumable links of a component
 */
export function ConsumableLink({
  title,
  link,
  className,
  ...rest
}: ConsumableLinkProps) {
  return (
    <Grid colMd={2} className={classNames(styles.copyMethod, className)} {...rest}>
      <Paragraph className={styles.copyTitle} size={PossibleSizes.sm}>
        {title}
      </Paragraph>
      <CopyBox className={styles.copyBox}>{link}</CopyBox>
    </Grid>
  );
}
