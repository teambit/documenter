import React from "react";
import { Paragraph } from "./paragraph";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

// tODO - make text stay single line
export const Xxs = () => {
  return (
    <ClientContext>
      <div >
        <Paragraph size={PossibleSizes.xxs}>xxs text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const Xs = () => {
  return (
    <ClientContext>
      <div >
        <Paragraph size={PossibleSizes.xs}>xs text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const Sm = () => {
  return (
    <ClientContext>
      <div >
        <Paragraph size={PossibleSizes.sm}>sm text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const Md = () => {
  return (
    <ClientContext>
      <div >
        <Paragraph size={PossibleSizes.md}>md text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const Lg = () => {
  return (
    <ClientContext>
      <div >
        <Paragraph size={PossibleSizes.lg}>lg text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const Xl = () => {
  return (
    <ClientContext>
      <div >
        <Paragraph size={PossibleSizes.xl}>xl text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const Xxl = () => {
  return (
    <ClientContext>
      <div >
        <Paragraph size={PossibleSizes.xxl}>xxl text</Paragraph>
      </div>
    </ClientContext>
  );
};
