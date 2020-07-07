import React from "react";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";
import { CopyBox } from "./copy-box";

export const WideCopyBoxExample = () => {
    
  return (
    <ClientContext>
        <CopyBox style={styles}>
            npm install @bit.bit.test-scope.copy-box
        </CopyBox>
    </ClientContext>
  );
};

export const NarrowCopyBoxExample = () => {
  return (
    <ClientContext>
        <CopyBox style={styles2}>
            npm install @bit.bit.test-scope.copy-box2
        </CopyBox>
    </ClientContext>
  );
};


const styles = {
    maxWidth: '600px',
}

const styles2 = {
    maxWidth: '200px',
}
