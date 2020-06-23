import React from 'react';
import { BigLogo } from './logo.composite';

export default () => {
  return (
    <>
      Rendering a big logo can be easy as: 
      <BigLogo />
    </>
  );
};

export const labels = ['logo', 'react', 'something else']; // docs are also auto-generated through an extension.

export const abstract = 'this is a very cool component';
