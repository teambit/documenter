import React from "react";
import classNames from "classnames";
import { Dropdown } from "@teambit/evangelist.surfaces.dropdown";
import { Icon } from "@teambit/evangelist.elements.icon";
import { Menu } from "./menu/menu";
import styles from "./import-action.module.scss";

type ImportActionProps = {
  /**
   * package link to be copied
   */
  packageLink: string;
  /**
   * import link to be copied
   */
  bitLink: string;
  /**
   * registry link to be copied
   */
  registryName: string;
  /**
   * component name to be presented
   */
  componentName: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ImportAction(props: ImportActionProps) {
  return (
    <div className={styles.importDropdown}>
      <Dropdown
        dropClass={styles.menu}
        placeholder=""
        clickToggles={false}
        clickPlaceholderToggles={true}
        PlaceholderComponent={Placeholder}
      >
        <Menu {...props} />
      </Dropdown>
    </div>
  );
}

function Placeholder(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames(styles.placeholder)} {...props}>
      <Icon of="package" />
      <div className={styles.content}>Use</div>
      <Icon className={styles.content} of="fat-arrow-down" />
    </div>
  );
}
