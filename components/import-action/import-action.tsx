import React from "react";
import classNames from "classnames";
import { CopyBox } from "@teambit/documenter.ui.copy-box";
import { Dropdown } from "@teambit/evangelist.surfaces.dropdown";
import { Icon } from "@teambit/evangelist.elements.icon";
import { ExternalLink } from "@teambit/documenter.routing.external-link";
import styles from "./import-action.module.scss";

type ImportActionProps = {
  /**
   * link to be copied
   */
  copyLink: string;
  /**
   * component name to be presented
   */
  componentName: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ImportAction({ copyLink, componentName }: ImportActionProps) {
  return (
    <div className={styles.importDropdown}>
      <Dropdown
        dropClass={styles.menu}
        placeholder=""
        clickToggles={false}
        clickOutside={true}
        clickPlaceholderToggles={true}
        PlaceholderComponent={Placeholder}
      >
        <div>
          <div className={styles.top}>
            <div className={styles.title}>
              <span>{`Import ${componentName} with Bit`}</span>
              <ExternalLink href="https://bit-new-docs.netlify.app/docs/consuming/vendor-components">
                <Icon of="information-sign" />
              </ExternalLink>
            </div>
            <div className={styles.text}>
              {`Clone ${componentName} to your workspace`}
            </div>
            <CopyBox>{copyLink}</CopyBox>
          </div>
          <div className={classNames(styles.bottom)}>
            <ExternalLink href="https://bit-new-docs.netlify.app/docs/guides/installation">
              <div className={classNames(styles.installBit)}>
                <Icon of="download" />
                <span>Install Bit on your computer</span>
              </div>
            </ExternalLink>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

function Placeholder(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames(styles.placeholder)} {...props}>
      <Icon of="package" />
      <div className={styles.content}>Import</div>
      <Icon className={styles.content} of="fat-arrow-down" />
    </div>
  );
}
