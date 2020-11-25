import React from "react";
import classNames from "classnames";
import { Icon } from "@teambit/evangelist.elements.icon";
import { HighlightedText } from "@teambit/documenter.ui.highlighted-text";
import { TabContent } from "./tab-content";
import styles from "./tab-content.module.scss";

export function Install({
  componentName,
  copyLink,
  onClick,
  registryName,
}: {
  componentName: string;
  copyLink: string;
  onClick: Function;
  registryName: string;
}) {
  return (
    <TabContent
      titleLine={`Install ${componentName} with a package manager`}
      copyString={copyLink}
    >
      <div
        className={classNames(styles.link, styles.installLink)}
        onClick={() => onClick("registry")}
      >
        <div>
          <Icon of="settings" />
          <span>
            Configure{" "}
            <HighlightedText size="xxs">{registryName}</HighlightedText> as a
            Scoped Registry
          </span>
        </div>
        <Icon of="arrow_right" />
      </div>
    </TabContent>
  );
}
