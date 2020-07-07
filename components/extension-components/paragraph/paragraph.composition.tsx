import React from "react";
import { Paragraph } from "./paragraph";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

// tODO - make text stay single line

export const ParagraphXxl = () => {
  return (
    <ClientContext>
      <div>
        <Paragraph size={PossibleSizes.xxl}>xxl text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const ParagraphXl = () => {
  return (
    <ClientContext>
      <div>
        <Paragraph size={PossibleSizes.xl}>xl text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const ParagraphLg = () => {
  return (
    <ClientContext>
      <div>
        <Paragraph size={PossibleSizes.lg}>lg text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const ParagraphMd = () => {
  return (
    <ClientContext>
      <div>
        <Paragraph size={PossibleSizes.md}>md text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const ParagraphSm = () => {
  return (
    <ClientContext>
      <div>
        <Paragraph size={PossibleSizes.sm}>sm text</Paragraph>
      </div>
    </ClientContext>
  );
};
export const ParagraphXs = () => {
  return (
    <ClientContext>
      <div>
        <Paragraph size={PossibleSizes.xs}>xs text</Paragraph>
      </div>
    </ClientContext>
  );
};

export const ParagraphXxs = () => {
  return (
    <ClientContext>
      <div>
        <Paragraph size={PossibleSizes.xxs}>xxs text</Paragraph>
      </div>
    </ClientContext>
  );
};
