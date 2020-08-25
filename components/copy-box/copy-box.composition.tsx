import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { CopyBox } from "./copy-box";

export const WideCopyBoxExample = () => {
    
  return (
    <ThemeContext>
        <CopyBox style={styles}>
            npm install @bit.bit.test-scope.copy-box
        </CopyBox>
    </ThemeContext>
  );
};

export const NarrowCopyBoxExample = () => {
  return (
    <ThemeContext>
        <CopyBox style={styles2}>
            npm install @bit.bit.test-scope.copy-box2
        </CopyBox>
    </ThemeContext>
  );
};


const styles = {
    maxWidth: '600px',
}

const styles2 = {
    maxWidth: '200px',
}
