import React from "react";
import classNames from "classnames";
import { Icon } from "@teambit/evangelist.elements.icon";
import { ExternalLink } from "@teambit/documenter.routing.external-link";
import { HighlightedText } from "@teambit/documenter.ui.highlighted-text";
import { links } from "@teambit/documenter.content.documentation-links";
import { TabContent } from "../tab-content";
import styles from "./tab-content.module.scss";

export type RegistryProps = {
  registryName: string;
  copyString: string;
  setActive: (active: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function Registry({ registryName, copyString, setActive }: RegistryProps) {
  return (
    <div>
      <div className={classNames(styles.back)}>
        <div onClick={() => setActive("install")}>
          <Icon of="leftarrow" />
          <span>Back</span>
        </div>
      </div>
      <TabContent
        titleLine={
          <div>
            Configure{" "}
            <HighlightedText size="xxs">{registryName}</HighlightedText> as a
            Scoped Registry
          </div>
        }
        copyString={copyString}
      >
        <ExternalLink href={links.scopedRegistry}>
          <div className={classNames(styles.link)}>
            <Icon of="information-sign" />
            <span>Learn more</span>
          </div>
        </ExternalLink>
      </TabContent>
    </div>
  );
}
