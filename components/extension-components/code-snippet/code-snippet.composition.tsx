import React from "react";
import { CodeSnippet } from "./code-snippet";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

const codeString = `export function Anchor(props: AnchorProps) {
  return (
    <a {...props} id={props.href} href={href} className={styles.anchor}>
      <Icon of="anchor" className={styles.anchorIcon}></Icon>
    </a>
  );
}`;

export const CodeSnippetExample = () => {
  return (
    <ClientContext>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "600px",
        }}
      >
        <CodeSnippet codeString={codeString} />
      </div>
    </ClientContext>
  );
};
