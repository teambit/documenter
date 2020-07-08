import React from "react";
import { LabelList } from "./label-list";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

const list = [
  'light label',
  'light label2'
]


export const LightLabel = () => {
  return (
    <ClientContext>
      <LabelList>{list}</LabelList>
    </ClientContext>
  );
};
