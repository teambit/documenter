import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { CopyBox } from './copy-box';

export const WideCopyBoxExample = () => {
  return (
    <ThemeCompositions>
      <CopyBox style={styles}>npm install @bit.bit.test-scope.copy-box</CopyBox>
    </ThemeCompositions>
  );
};

export const NarrowCopyBoxExample = () => {
  return (
    <ThemeCompositions>
      <CopyBox style={styles2}>
        npm install @bit.bit.test-scope.copy-box2
      </CopyBox>
    </ThemeCompositions>
  );
};

const styles = {
  maxWidth: '600px',
};

const styles2 = {
  maxWidth: '200px',
};
