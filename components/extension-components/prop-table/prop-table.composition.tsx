import React from "react";
import { PropTable } from "./prop-table";
import { PossibleSizes } from "@bit/bit.base-ui.theme.sizes";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

// tODO - make text stay single line
export const PropertyTableExample = () => {
  return (
    <ClientContext>
      <div >
      <PropTable rows={tableData.rows} />
      </div>
    </ClientContext>
  );
};

const tableData = {
    rows: [
      {
        name: "heading",
        type: "ElementType",
        description: "An element type to render as (string or function).",
        required: true,
        defaultValue: "20 minutes",
      },
      {
        name: "paragrapg",
        type: "ElementType",
        description: "An element type to render.",
        required: true,
        defaultValue: "20 minutes",
      },
      {
        name: "as",
        type: "ElementType",
        description: "An element type to render.",
        required: true,
        defaultValue: "20 minutes",
      },
    ],
  };
  