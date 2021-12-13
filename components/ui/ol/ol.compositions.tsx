import React from 'react';
import { Ol } from './ol';

export const OlExample = () => {
  return (
    <Ol>
      <li>Ol text</li>
      <li>Ol text</li>
      <li>Ol text</li>
    </Ol>
  );
};

export const NestedList = () => {
  return (
    <Ol>
      <li>Ol text</li>
      <li>Ol text</li>
      <li>Ol text</li>
      <Ol>
        <li>Ol text</li>
        <li>Ol text</li>
        <Ol>
          <li>Ol text</li>
          <li>Ol text</li>
          <li>Ol text</li>
        </Ol>
        <li>Ol text</li>
      </Ol>
    </Ol>
  );
};
