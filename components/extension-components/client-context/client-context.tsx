import React from "react";
import { Theme } from "@bit/bit.base-ui.theme.theme-provider";
import styles from "./sizes.module.scss";

type ClientContextProps = {
  children: JSX.Element;
};

export function ClientContext({ children, ...rest }: ClientContextProps) {
  return (
      <Theme {...rest} className={styles.heading}>
        {/* // dev link for icons */}
        <link
          rel="stylesheet"
          href="https://i.icomoon.io/public/9dc81da9ad/Bit/style.css"
        ></link>
        {children}
      </Theme>
  );
}