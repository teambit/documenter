import React from 'react';
import { ConsumableLink } from './consumable-link';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

const link = {
  title: 'import using bit',
  link: 'bit import @bit.bit/test-scope/consumable-link',
};
const link2 = {
  title: 'install with npm',
  link: 'npm install @bit.bit.test-scope.consumable-link',
};
export const BitImportExample = () => {
  return (
    <ThemeCompositions>
      <div style={styles}>
        <ConsumableLink {...link} />
      </div>
    </ThemeCompositions>
  );
};

export const NpmInstallExample = () => {
  return (
    <ThemeCompositions>
      <div style={styles}>
        <ConsumableLink {...link2} />
      </div>
    </ThemeCompositions>
  );
};

const styles = {
  minWidth: '700px',
  margin: 'auto',
  marginTop: '20px',
};
