import React, { useState } from 'react';
import { CopiedMessage } from './copied-message';
import { Icon } from '@teambit/evangelist.elements.icon';
import { H5 } from '@teambit/documenter.ui.heading';

export const CopiedMessageExample = () => {
  return (
    <div style={{ position: 'relative', paddingLeft: 50, height: 20 }}>
      <CopiedMessage show={true} />
    </div>
  );
};

export const HiddenCopiedMessageExample = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div style={{ position: 'relative' }}>
      <H5>Click icon to copy</H5>
      <Icon onClick={handleClick} of="copy-cmp" style={{ marginRight: 60, cursor: 'pointer' }} />
      <CopiedMessage show={isCopied} />
    </div>
  );
};
