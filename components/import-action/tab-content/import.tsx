import React from "react";
import classNames from "classnames";
import { Icon } from "@teambit/evangelist.elements.icon";
import { ExternalLink } from "@teambit/documenter.routing.external-link";
import { Links } from "@teambit/documenter.docs.documentation-links";
import { TabContent } from "./tab-content";
import styles from "./tab-content.module.scss";

export function Import({
  componentName,
  copyLink,
}: {
  componentName: string;
  copyLink: string;
}) {
  return (
    <TabContent
      titleLine={`Get ${componentName} and all its versions to your workspace`}
      copyString={copyLink}
    >
      <ExternalLink href={Links.installBit}>
        <div className={classNames(styles.link)}>
          <Icon of="download" />
          <span>Install Bit on your computer</span>
        </div>
      </ExternalLink>
    </TabContent>
  );
}
