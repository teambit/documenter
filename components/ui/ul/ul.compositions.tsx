import React from 'react';
import { Ul } from './ul';

export const UlExample = () => {
  return (
    <Ul>
      <li>Ul text</li>
      <li>Ul text</li>
      <li>Ul text</li>
    </Ul>
  );
};

export const NestedList = () => {
  return (
    <Ul>
      <li>Ul text</li>
      <li>Ul text</li>
      <li>Ul text</li>
      <Ul>
        <li>Ul text</li>
        <li>Ul text</li>
        <Ul>
          <li>Ul text</li>
          <li>Ul text</li>
          <li>Ul text</li>
        </Ul>
        <li>Ul text</li>
      </Ul>
    </Ul>
  );
};
