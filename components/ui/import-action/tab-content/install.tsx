import React from "react";
import classNames from "classnames";
import { Icon } from "@teambit/evangelist.elements.icon";
import { HighlightedText } from "@teambit/documenter.ui.highlighted-text";
import { TabContent } from "./tab-content";
import styles from "./tab-content.module.scss";

export type InstallProps = {
  componentName: string;
  copyString: string;
  setActive: (active: string) => void;
  registryName: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Install({
  componentName,
  copyString,
  setActive,
  registryName,
  ...rest
}: InstallProps) {
  return (
    <TabContent
      {...rest}
      titleLine={`Install ${componentName} with a package manager`}
      copyString={copyString}
    >
      <div
        className={classNames(styles.link, styles.installLink)}
        onClick={() => setActive("registry")}
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
