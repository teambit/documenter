import React from "react";
import { Subtitle } from "./sub-title";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

// tODO - make text stay single line
export const Xxs = () => {
  return (
    <ClientContext>
      <div >
      <Subtitle>A subtitile text</Subtitle>
      </div>
    </ClientContext>
  );
};