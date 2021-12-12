import React from 'react';
import { createHeading, h1 as H1, h5 as H5 } from './create-heading';

export const CreateH1Example = () => {
  const Heading = createHeading('lg');
  return <Heading data-testid="test-create-heading">H1 size</Heading>;
};

export const CreateH2Example = () => {
  const Heading = createHeading('md');
  return <Heading data-testid="test-create-heading">H2 size</Heading>;
};

export const CreateH3Example = () => {
  const Heading = createHeading('sm');
  return <Heading data-testid="test-create-heading">H3 size</Heading>;
};

export const CreateH4Example = () => {
  const Heading = createHeading('xs');
  return <Heading data-testid="test-create-heading">H4 size</Heading>;
};

export const CreateH5Example = () => {
  const Heading = createHeading('xxs');
  return <Heading data-testid="test-create-heading">H5 size</Heading>;
};

export const CreateH6Example = () => {
  const Heading = createHeading('xxs');
  return <Heading data-testid="test-create-heading">H6 size</Heading>;
};

export const LinkedH1Example = () => {
  return <H1 link="link">Linked H1</H1>;
};

export const LinkedH5Example = () => {
  return <H5 link="link">Linked H5</H5>;
};
