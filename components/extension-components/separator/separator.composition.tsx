import React from "react";
import { Separator } from "./separator";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

// tODO - make text stay single line
export const SeapartorExample = () => {
  return (
    <ClientContext>
      <div >
      <Separator style={{width: '100%'}} />
      </div>
    </ClientContext>
  );
};