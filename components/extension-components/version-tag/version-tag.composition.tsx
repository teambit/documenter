import React from "react";
import { VersionTag } from "./version-tag";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

// tODO - make text stay single line
export const LatestTagExample = () => {
  return (
    <ClientContext>
        <VersionTag></VersionTag>
    </ClientContext>
  )
};
export const VersionTagExample = () => {
    return (
      <ClientContext>
          <VersionTag>10.0.1</VersionTag>
      </ClientContext>
    )
}
