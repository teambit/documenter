import React from "react";
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { List } from "./list";
import { HighlightedText } from "@teambit/documenter-temp.ui.highlighted-text";
import { CopyBox } from "@teambit/documenter-temp.ui.copy-box";
import { H5 } from "@teambit/documenter-temp.ui.heading";


export const SimpleBulletList = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list</H5>
        <List>{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ThemeContext>
  );
};

export const SimpleBulletListWithSmallSpacing = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list with small spacing</H5>
        <List spacing="sm">{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ThemeContext>
  );
};
export const SimpleBulletListWithMediumSpacing = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list with medium spacing</H5>
        <List spacing="md">{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ThemeContext>
  );
};
export const SimpleBulletListWithLargeSpacing = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list with large spacing</H5>
        <List spacing="lg">{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ThemeContext>
  );
};
export const SimpleBulletListWithExtraLargeSpacing = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list with extra large spacing</H5>
        <List spacing="xl">{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ThemeContext>
  );
};

export const SimpleNumberedListWithInlineComponent = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A list with an inline component inside one of the items</H5>
        <List element="ol">
          {[
            "one",
            "two",
            <HighlightedText>three</HighlightedText>,
            "four",
          ]}
        </List>
      </CanvasWrapper>
    </ThemeContext>
  );
};

export const NumberedListWithNestedNumberedList = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
      <H5 style={{marginBottom: 30}}>A list an ordered list nested inside</H5>
        <List element="ol">
          {[
            "one",
            "two",
            <List element="ol">{["one", "two", "three"]}</List>,
            "three",
          ]}
        </List>
      </CanvasWrapper>
    </ThemeContext>
  );
};
export const NumberedListWithNestedBulletList = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
      <H5 style={{marginBottom: 30}}>A list an un-ordered list nested inside</H5>
        <List element="ol">
          {[
            "one",
            "two",
            <List>{["one", "two", "tree"]}</List>,
            "three",
          ]}
        </List>
      </CanvasWrapper>
    </ThemeContext>
  );
};
export const NumberedListWithBlockElement = () => {
  return (
    <ThemeContext>
      <CanvasWrapper>
      <H5 style={{marginBottom: 30}}>A list an element with a <HighlightedText>display: block</HighlightedText> inside</H5>
        <List element="ol">
          {[
            "one",
            "two",
            <CopyBox style={{marginBottom: 10}}>any element can be placed in the list</CopyBox>,
            "three",
          ]}
        </List>
      </CanvasWrapper>
    </ThemeContext>
  );
};

function CanvasWrapper({ children }) {
  return <div style={{ minWidth: 200 }}>{children}</div>;
}
