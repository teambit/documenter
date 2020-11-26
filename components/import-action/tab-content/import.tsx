import React from "react";
import classNames from "classnames";
import { Icon } from "@teambit/evangelist.elements.icon";
import { ExternalLink } from "@teambit/documenter.routing.external-link";
import { links } from "@teambit/documenter.content.documentation-links";
import { TabContent } from "./tab-content";
import styles from "./tab-content.module.scss";

export type ImportProps = {
  componentName: string;
  copyString: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Import({ componentName, copyString, ...rest }: ImportProps) {
  return (
    <TabContent
      {...rest}
      titleLine={`Get ${componentName} and all its versions to your workspace`}
      copyString={copyString}
    >
      <ExternalLink href={links.installBit}>
        <div className={classNames(styles.link)}>
          <Icon of="download" />
          <span>Install Bit on your computer</span>
        </div>
      </ExternalLink>
    </TabContent>
  );
}
