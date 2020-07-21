import React from "react";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";
import { List } from "./list";
import { HighlightedText } from "@bit/bit.test-scope.ui.highlighted-text";
import { CopyBox } from "@bit/bit.test-scope.ui.copy-box/copy-box";
import { H5 } from "@bit/bit.test-scope.ui.heading";


export const SimpleBulletList = () => {
  return (
    <ClientContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list</H5>
        <List>{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ClientContext>
  );
};

export const SimpleBulletListWithSmallSpacing = () => {
  return (
    <ClientContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list with small spacing</H5>
        <List spacing="sm">{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ClientContext>
  );
};
export const SimpleBulletListWithLargeSpacing = () => {
  return (
    <ClientContext>
      <CanvasWrapper>
        <H5 style={{marginBottom: 30}}>A simple list with large spacing</H5>
        <List spacing="lg">{["one", "two", "three"]}</List>
      </CanvasWrapper>
    </ClientContext>
  );
};

export const SimpleNumberedList = () => {
  return (
    <ClientContext>
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
    </ClientContext>
  );
};

export const SimpleAnchor2 = () => {
  return (
    <ClientContext>
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
    </ClientContext>
  );
};
export const SimpleAnchor3 = () => {
  return (
    <ClientContext>
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
    </ClientContext>
  );
};
export const SimpleAnchor5 = () => {
  return (
    <ClientContext>
      <CanvasWrapper>
      <H5 style={{marginBottom: 30}}>A list an element with a <HighlightedText>display: block</HighlightedText> inside</H5>
        <List element="ol">
          {[
            "one",
            "two",
            <CopyBox>any element can be placed in the list</CopyBox>,
            "three",
          ]}
        </List>
      </CanvasWrapper>
    </ClientContext>
  );
};

function CanvasWrapper({ children }) {
  return <div style={{ minWidth: 200 }}>{children}</div>;
}
