import React from "react";
import { PropTable } from "./prop-table";
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";

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
        type: "string",
        description: "An element type to render as (string or function).",
        required: true,
        defaultValue: {value: "20 minutes"},
      },
      {
        name: "paragrapg",
        type: "string",
        description: "An element type to render.",
        required: true,
        defaultValue: {value: "20 minutes"},
      },
      {
        name: "as",
        type: "'h1' | 'h2' | 'h3'",
        description: "An element type to render.",
        required: true,
        defaultValue: {value: "h1"},
      },
    ],
  };
  