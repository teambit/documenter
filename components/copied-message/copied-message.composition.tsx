import React, { useState } from "react";
import { CopiedMessage } from "./copied-message";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";
import { Icon } from "@bit/bit.evangelist.elements.icon";
import { H5 } from "@bit/bit.test-scope.ui.heading/heading";

const codeString = `export function Anchor(props: AnchorProps) {
  return (
    <a {...props} id={props.href} href={href} className={styles.anchor}>
      <Icon of="anchor" className={styles.anchorIcon}></Icon>
    </a>
  );
}`;

export const CopiedMessageExample = () => {
  return (
    <ThemeContext>
      <div style={{position: 'relative'}}>
        <CopiedMessage show={true} style={{top: '-10px', right: '-20px'}} />
      </div>
    </ThemeContext>
  );
};
export const HiddenCopiedMessageExample = () => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <ThemeContext>
      <div style={{position: 'relative', width: 200}}>
      <H5>Click icon to copy</H5>
      <Icon onClick={handleClick} of="copy-cmp" />
        <CopiedMessage show={isCopied} 
        style={{top: 23, right: 120}} 
        />
      </div>
    </ThemeContext>
  );
};

CopiedMessageExample.canvas = {
  width: '100px',
  height: '30px',
}