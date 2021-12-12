import React, { ReactNode } from 'react';
import { List } from './list';
import { HighlightedText } from '@teambit/documenter.ui.highlighted-text';
import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { H5 } from '@teambit/documenter.ui.heading';

export const SimpleBulletList = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A simple list</H5>
      <List>{['one', 'two', 'three']}</List>
    </CanvasWrapper>
  );
};

export const SimpleBulletListWithSmallSpacing = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A simple list with small spacing</H5>
      <List spacing="sm">{['one', 'two', 'three']}</List>
    </CanvasWrapper>
  );
};
export const SimpleBulletListWithMediumSpacing = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A simple list with medium spacing</H5>
      <List spacing="md">{['one', 'two', 'three']}</List>
    </CanvasWrapper>
  );
};
export const SimpleBulletListWithLargeSpacing = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A simple list with large spacing</H5>
      <List spacing="lg">{['one', 'two', 'three']}</List>
    </CanvasWrapper>
  );
};
export const SimpleBulletListWithExtraLargeSpacing = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A simple list with extra large spacing</H5>
      <List spacing="xl">{['one', 'two', 'three']}</List>
    </CanvasWrapper>
  );
};

export const SimpleNumberedListWithInlineComponent = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A list with an inline component inside one of the items</H5>
      <List element="ol">{['one', 'two', <HighlightedText>three</HighlightedText>, 'four']}</List>
    </CanvasWrapper>
  );
};

export const NumberedListWithNestedNumberedList = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A list an ordered list nested inside</H5>
      <List element="ol">{['one', 'two', <List element="ol">{['one', 'two', 'three']}</List>, 'three']}</List>
    </CanvasWrapper>
  );
};
export const NumberedListWithNestedBulletList = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>A list an un-ordered list nested inside</H5>
      <List element="ol">{['one', 'two', <List>{['one', 'two', 'tree']}</List>, 'three']}</List>
    </CanvasWrapper>
  );
};
export const NumberedListWithBlockElement = () => {
  return (
    <CanvasWrapper>
      <H5 style={{ marginBottom: 30 }}>
        A list an element with a <HighlightedText>display: block</HighlightedText> inside
      </H5>
      <List element="ol">
        {['one', 'two', <CopyBox style={{ marginBottom: 10 }}>any element can be placed in the list</CopyBox>, 'three']}
      </List>
    </CanvasWrapper>
  );
};

function CanvasWrapper({ children }: { children: ReactNode }) {
  return <div style={{ minWidth: 200 }}>{children}</div>;
}
