import React from "react";
import classNames from "classnames";
import { CopyBox } from "@teambit/documenter.ui.copy-box";

import styles from "./tab-content.module.scss";

export type TabContentProps = {
  titleLine: React.ReactNode;
  copyString: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function TabContent({ titleLine, copyString, children }: TabContentProps) {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.text}>{titleLine}</div>
      </div>
      <div className={styles.middle}>
        <CopyBox>{copyString}</CopyBox>
      </div>
      <div className={classNames(styles.bottom)}>{children}</div>
    </div>
  );
}
