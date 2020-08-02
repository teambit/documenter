import React from "react";
import { Paragraph } from "./paragraph";
import { PossibleSizes } from "@teambit/base-ui-temp.theme.sizes";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

// tODO - make text stay single line

export const ParagraphXxl = () => {
  return (
    <ThemeContext>
      <div>
        <Paragraph size={PossibleSizes.xxl}>xxl text</Paragraph>
      </div>
    </ThemeContext>
  );
};
export const ParagraphXl = () => {
  return (
    <ThemeContext>
      <div>
        <Paragraph size={PossibleSizes.xl}>xl text</Paragraph>
      </div>
    </ThemeContext>
  );
};
export const ParagraphLg = () => {
  return (
    <ThemeContext>
      <div>
        <Paragraph size={PossibleSizes.lg}>lg text</Paragraph>
      </div>
    </ThemeContext>
  );
};
export const ParagraphMd = () => {
  return (
    <ThemeContext>
      <div>
        <Paragraph size={PossibleSizes.md}>md text</Paragraph>
      </div>
    </ThemeContext>
  );
};
export const ParagraphSm = () => {
  return (
    <ThemeContext>
      <div>
        <Paragraph size={PossibleSizes.sm}>sm text</Paragraph>
      </div>
    </ThemeContext>
  );
};
export const ParagraphXs = () => {
  return (
    <ThemeContext>
      <div>
        <Paragraph size={PossibleSizes.xs}>xs text</Paragraph>
      </div>
    </ThemeContext>
  );
};

export const ParagraphXxs = () => {
  return (
    <ThemeContext>
      <div>
        <Paragraph size={PossibleSizes.xxs}>xxs text</Paragraph>
      </div>
    </ThemeContext>
  );
};
