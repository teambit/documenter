import React from "react";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";
import { H1, H2, H3, H4, H5, H6 } from "./heading";

export const HeadingXl = () => {
    return (
  <ClientContext>
    <H1 style={{whiteSpace: 'nowrap'}}>main header</H1>
  </ClientContext>
)}
export const HeadingLg = () => (
  <ClientContext>
    <H2 style={{whiteSpace: 'nowrap'}}>main header</H2>
  </ClientContext>
)
export const HeadingMd = () => (
  <ClientContext>
    <H3 style={{whiteSpace: 'nowrap'}}>main header</H3>
  </ClientContext>
)
export const HeadingSm = () => (
  <ClientContext>
    <H4 style={{whiteSpace: 'nowrap'}}>main header</H4>
  </ClientContext>
)
export const HeadingXs = () => (
  <ClientContext>
    <H5 style={{whiteSpace: 'nowrap'}}>main header</H5>
  </ClientContext>
)
export const HeadingXxs = () => (
  <ClientContext>
    <H6 style={{whiteSpace: 'nowrap'}}>main header</H6>
  </ClientContext>
);
