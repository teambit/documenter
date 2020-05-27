import React from 'react';
import { BigLogo } from './logo.composite';

export default ({ component }) => {
  return (
    <div>
      <h1>Logo</h1>

      Rendering a big logo can be easy as: 
      <BigLogo />
    </div>
  );
};
