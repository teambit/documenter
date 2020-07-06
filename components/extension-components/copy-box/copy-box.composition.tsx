import React from "react";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";
import { CopyBox } from "./copy-box";

export const ExampleLinks = () => {
    
  return (
    <ClientContext>
      <div style={styles}>
        <CopyBox>
            npm install @bit.bit.test-scope.copy-box
        </CopyBox>
      </div>
    </ClientContext>
  );
};

export const ExampleLinks2 = () => {
  return (
    <ClientContext>
      <div style={styles}>
        <CopyBox>
            npm install @bit.bit.test-scope.copy-box2
        </CopyBox>
      </div>
    </ClientContext>
  );
};


const styles = {
    maxWidth: '80%',
    margin: 'auto'
}
