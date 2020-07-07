import React from "react";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";
import { H1, H2, H3, H4, H5, H6 } from "./heading";

export const Heading1 = () => {
    return (
  <ClientContext>
    <H1 style={{whiteSpace: 'nowrap'}}>main header</H1>
  </ClientContext>
)}
export const Heading2 = () => (
  <ClientContext>
    <H2 style={{whiteSpace: 'nowrap'}}>main header</H2>
  </ClientContext>
)
export const Heading3 = () => (
  <ClientContext>
    <H3 style={{whiteSpace: 'nowrap'}}>main header</H3>
  </ClientContext>
)
export const Heading4 = () => (
  <ClientContext>
    <H4 style={{whiteSpace: 'nowrap'}}>main header</H4>
  </ClientContext>
)
export const Heading5 = () => (
  <ClientContext>
    <H5 style={{whiteSpace: 'nowrap'}}>main header</H5>
  </ClientContext>
)
export const Heading6 = () => (
  <ClientContext>
    <H6 style={{whiteSpace: 'nowrap'}}>main header</H6>
  </ClientContext>
);
