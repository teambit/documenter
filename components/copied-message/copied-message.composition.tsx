import React, { useState } from 'react';
import { CopiedMessage } from './copied-message';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Icon } from '@teambit/evangelist.elements.icon';
import { H5 } from '@teambit/documenter.ui.heading';

const codeString = `export function Anchor(props: AnchorProps) {
  return (
    <a {...props} id={props.href} href={href} className={styles.anchor}>
      <Icon of="anchor" className={styles.anchorIcon}></Icon>
    </a>
  );
}`;

export const CopiedMessageExample = () => {
  return (
    <ThemeCompositions>
      <div style={{ position: 'relative' }}>
        <CopiedMessage show={true} />
      </div>
    </ThemeCompositions>
  );
};

export const HiddenCopiedMessageExample = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <ThemeCompositions>
      <div style={{ position: 'relative', width: 200 }}>
        <H5>Click icon to copy</H5>
        <Icon onClick={handleClick} of="copy-cmp" />
        <CopiedMessage show={isCopied} style={{ top: 23, right: 120 }} />
      </div>
    </ThemeCompositions>
  );
};
