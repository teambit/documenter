import React from "react";
import { Icon } from "@teambit/evangelist.elements.icon";
import { Registry, Import, Install } from "../tab-content";
import { Tab } from "../tab";
import styles from "./menu.module.scss";

export type TabOptions = "registry" | "import" | "install";

export type ImportMenuProps = {
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
  /**
   * currently active tab
   */
  activeTab: TabOptions;
  /**
   * change currently active tab
   */
  setActiveTab: (active: TabOptions) => void;
  
  Link: any;
} & React.HTMLAttributes<HTMLDivElement>;

export function ImportMenu({
  packageLink,
  bitLink,
  registryName,
  componentName,
  activeTab,
  setActiveTab,
  Link,
}: ImportMenuProps) {
  if (activeTab === "registry") {
    return (
      <Registry
        registryName={registryName}
        copyString={`npm config set '${registryName}:registry' https://node.bit.dev`}
        setActive={setActiveTab}
        Link={Link}
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
        <Import componentName={componentName} Link={Link} copyString={bitLink} />
      )}
      {activeTab === "install" && (
        <Install
          componentName={componentName}
          registryName={registryName}
          copyString={packageLink}
          setActive={setActiveTab}
        />
      )}
    </div>
  );
}

function Tabs({
  onClick,
  activeTab,
}: {
  activeTab: TabOptions;
  onClick: (active: string) => void;
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
