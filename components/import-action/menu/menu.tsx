import React, { useState } from "react";
import classNames from "classnames";
import { Icon } from "@teambit/evangelist.elements.icon";
import { Registry, Import, Install } from "../tab-content";
import { Tab } from "../tab";
import styles from "./menu.module.scss";

export type MenuProps = {
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

export function Menu({
  packageLink,
  bitLink,
  registryName,
  componentName
}: MenuProps) {
  const [activeTab, setActiveTab] = useState("import");
  if (activeTab === "registry") {
    return (
      <Registry
        registryName={registryName}
        copyLink={`npm config set '${registryName}:registry' https://node.bit.dev`}
        onClick={setActiveTab}
      />
    );
  }
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.title}>
          <Icon of="terminal" />
          <span>{`Use ${componentName}`}</span>
        </div>
      </div>
      <Tabs activeTab={activeTab} onClick={setActiveTab} />
      {activeTab === "import" && (
        <Import componentName={componentName} copyLink={bitLink} />
      )}
      {activeTab === "install" && (
        <Install
          componentName={componentName}
          registryName={registryName}
          copyLink={packageLink}
          onClick={setActiveTab}
        />
      )}
    </div>
  );
}

function Tabs({
  onClick,
  activeTab,
}: {
  activeTab: string;
  onClick: Function;
}) {
  return (
    <div className={styles.tabs}>
      <Tab title="import" isActive={activeTab === "import"} onClick={onClick} />
      <Tab
        title="install"
        isActive={activeTab === "install"}
        onClick={onClick}
      />
    </div>
  );
}
