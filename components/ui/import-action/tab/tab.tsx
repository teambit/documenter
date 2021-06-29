import React from "react";
import classNames from "classnames";
import styles from "./tab.module.scss";

export type TabProps<T extends string> = {
  isActive: boolean;
  title: T;
  onClick: (target: T) => void;
};

export function Tab<T extends string>({ onClick, isActive, title }: TabProps<T>) {
  return (
    <div
      className={classNames(styles.tab, isActive && styles.active)}
      onClick={() => onClick(title)}
    >
      {title}
    </div>
  );
}
