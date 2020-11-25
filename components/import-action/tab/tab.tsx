import React from "react";
import classNames from "classnames";
import styles from "./tab.module.scss";

export type TabProps = {
  isActive: Boolean;
  title: string;
  onClick: Function;
};

export function Tab({ onClick, isActive, title }: TabProps) {
  return (
    <div
      className={classNames(styles.tab, isActive && styles.active)}
      onClick={() => onClick(title)}
    >
      {title}
    </div>
  );
}
