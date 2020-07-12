import React from "react";
import { Table } from "./table";
import { ClientContext } from "@bit/bit.test-scope.theme.client-context";

export const PropertyTableExample = () => {
  return (
    <ClientContext>
      <div>
        <Table headings={tableData.headings} rows={tableData.rows} />
      </div>
    </ClientContext>
  );
};

const tableData = {
  headings: ["name", "type", "defaultValue", "description"],
  rows: [
    {
      name: "heading",
      type: "ElementType",
      description: "An element type to render as (string or function).",
      required: true,
      defaultValue: { value: "20 minutes" },
    },
    {
      name: "paragrapg",
      type: "ElementType",
      description: "An element type to render.",
      required: true,
      defaultValue: { value: "20 minutes" },
    },
    {
      name: "as",
      type: "ElementType",
      description: "An element type to render.",
      required: true,
      defaultValue: { value: "20 minutes" },
    },
  ],
};
