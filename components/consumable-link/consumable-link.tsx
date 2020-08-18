import React from "react";
import classNames from "classnames";
import { PossibleSizes } from "@teambit/base-ui-temp.theme.sizes";
import { Grid } from "@teambit/base-ui-temp.layout.grid-component";
import { CopyBox } from "@teambit/documenter-temp.ui.copy-box";
import { Paragraph } from "@teambit/base-ui-temp.text.paragraph";
import styles from "./consumable-link.module.scss";


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
    //TODO - fix copy box in small res
    <Grid colMd={2} className={classNames(styles.copyMethod, className)} {...rest}>
      <Paragraph className={styles.copyTitle} size={PossibleSizes.xs}>
        {title}
      </Paragraph>
      <CopyBox className={styles.copyBox}>{link}</CopyBox>
    </Grid>
  );
}
