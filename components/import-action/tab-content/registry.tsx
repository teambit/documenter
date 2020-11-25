import React from "react";
import classNames from "classnames";
import { Icon } from "@teambit/evangelist.elements.icon";
import { ExternalLink } from "@teambit/documenter.routing.external-link";
import { HighlightedText } from "@teambit/documenter.ui.highlighted-text";
import { TabContent } from "../tab-content";
import styles from "./tab-content.module.scss";

export function Registry({
  registryName,
  copyLink,
  onClick,
}: {
  registryName: string;
  copyLink: string;
  onClick: Function;
}) {
  return (
    <div>
      <div className={classNames(styles.back)}>
        <div onClick={() => onClick("install")}>
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
        copyString={copyLink}
      >
        <ExternalLink href="https://docs.bit.dev/docs/installing-components#configuring-bit-registry">
          <div className={classNames(styles.link)}>
            <Icon of="information-sign" />
            <span>Learn more</span>
          </div>
        </ExternalLink>
      </TabContent>
    </div>
  );
}
