import React from "react";
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { H1, H2, H3, H4, H5, H6 } from "./heading";

export const HeadingXl = () => {
    return (
  <ThemeContext>
    <H1 style={{whiteSpace: 'nowrap'}}>main header</H1>
  </ThemeContext>
)}
export const HeadingLg = () => (
  <ThemeContext>
    <H2 style={{whiteSpace: 'nowrap'}}>main header</H2>
  </ThemeContext>
)
export const HeadingMd = () => (
  <ThemeContext>
    <H3 style={{whiteSpace: 'nowrap'}}>main header</H3>
  </ThemeContext>
)
export const HeadingSm = () => (
  <ThemeContext>
    <H4 style={{whiteSpace: 'nowrap'}}>main header</H4>
  </ThemeContext>
)
export const HeadingXs = () => (
  <ThemeContext>
    <H5 style={{whiteSpace: 'nowrap'}}>main header</H5>
  </ThemeContext>
)
export const HeadingXxs = () => (
  <ThemeContext>
    <H6 style={{whiteSpace: 'nowrap'}}>main header</H6>
  </ThemeContext>
);
