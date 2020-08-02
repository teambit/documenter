import React from "react";
import classNames from 'classnames';
import 'reset-css';
import { Theme } from "@teambit/base-ui-temp.theme.theme-provider";
import sizes from "./sizes.module.scss";
import global from './global.module.scss'; // TODO - rename

type ThemeContextProps = {
  children: JSX.Element;
};

export function ThemeContext({ children, ...rest }: ThemeContextProps) {
  return (
      <Theme {...rest} className={classNames(sizes.heading, global.overrides)}>
        {/* // dev link for icons */}
        {/* TODO - decide if icons link needs to be here or separated */}
        <link
          rel="stylesheet"
          href="https://i.icomoon.io/public/9dc81da9ad/Bit/style.css"
        ></link>
        {children}
      </Theme>
  );
}