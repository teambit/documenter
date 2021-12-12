import React from 'react';
import { ConsumableLink } from './consumable-link';

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
    <div style={styles}>
      <ConsumableLink {...link} />
    </div>
  );
};

export const NpmInstallExample = () => {
  return (
    <div style={styles}>
      <ConsumableLink {...link2} />
    </div>
  );
};

const styles = {
  minWidth: '700px',
  margin: 'auto',
  marginTop: '20px',
};
