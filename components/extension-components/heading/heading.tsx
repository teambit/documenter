import React from "react";
import classNames from "classnames";

import { HeadingProps, Heading } from "@bit/bit.base-ui.text.heading";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";

import sizeStyles from "./heading-sizes.module.scss";
import styles from "./heading.module.scss";

export type HeaderProps = {
  /** font-size for the header */
  size?: PossibleSizes;
} & HeadingProps;

export function H1(props: HeaderProps) {
  return (
    <Heading
      element="h1"
      {...props}
      className={classNames(
        styles.h1,
        sizeStyles[props.size || "xl"],
        props.className
      )}
    />
  );
}
export function H2(props: HeaderProps) {
  return (
    <Heading
      element="h2"
      {...props}
      className={classNames(
        styles.h2,
        sizeStyles[props.size || "lg"],
        props.className
      )}
    />
  );
}
export function H3(props: HeaderProps) {
  return (
    <Heading
      element="h3"
      {...props}
      className={classNames(
        styles.h3,
        sizeStyles[props.size || "md"],
        props.className
      )}
    />
  );
}
export function H4(props: HeaderProps) {
  return (
    <Heading
      element="h4"
      {...props}
      className={classNames(
        styles.h4,
        sizeStyles[props.size || "sm"],
        props.className
      )}
    />
  );
}
export function H5(props: HeaderProps) {
  return (
    <Heading
      element="h5"
      {...props}
      className={classNames(
        styles.h5,
        sizeStyles[props.size || "xs"],
        props.className
      )}
    />
  );
}
export function H6(props: HeaderProps) {
  return (
    <Heading
      element="h6"
      {...props}
      className={classNames(
        styles.h6,
        sizeStyles[props.size || "xxs"],
        props.className
      )}
    />
  );
}