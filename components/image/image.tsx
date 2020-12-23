import React from "react";
import classNames from "classnames";
import styles from "./image.module.scss";

export type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement>;;

export function Image({src, className, ...rest }: ImageProps) {
  return <img {...rest} src={src} className={classNames(styles.img, className)} />;
}
