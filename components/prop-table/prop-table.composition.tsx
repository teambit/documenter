import React from "react";
import { PropTable } from "./prop-table";
import { ThemeContext } from "@bit/bit.test-scope.theme.theme-context";

// tODO - make text stay single line
export const PropertyTableExample = () => {
  return (
    <ThemeContext>
      <div >
      <PropTable rows={tableData.rows} />
      </div>
    </ThemeContext>
  );
};

const tableData = {
    rows: [
      {
        name: "heading",
        type: "ElementType",
        description: "An element type to render as (string or function).",
        required: true,
        defaultValue: {value: "20 minutes"},
      },
      {
        name: "paragrapg",
        type: "ElementType",
        description: "An element type to render.",
        required: true,
        defaultValue: {value: "20 minutes"},
      },
      {
        name: "as",
        type: "ElementType",
        description: "An element type to render.",
        required: true,
        defaultValue: {value: "20 minutes"},
      },
    ],
  };
  