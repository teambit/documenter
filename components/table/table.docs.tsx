import React from 'react';
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { Table } from "@teambit/documenter-temp.ui.table"
import { List } from "@teambit/documenter-temp.ui.list"

export const labels = ['react', 'ui-component', 'table'];

export const examples = [
    {
    scope: {
        Table,
        ThemeContext
    },
    title: "Using the CopyBox component.",
    description: (
        <ThemeContext>
            <>
                <p>The 'headings' array defines the table's headers and their order.</p>
                <p>The 'data' array [of objects] defines the data to populate the table. Each object key corresponds to a column header, with two exeptions: </p>
                <List>
                {[
                    `'required' does not populate an independent column. It is appended to the value shown in the 'name' header.`,

                ]}
                </List>
            </>
        </ ThemeContext>
        ),
    code: `
() => {
    const headings = ['name', 'type', 'required', 'defaultValue', 'somethingElse']
    const data = [
        {
            name: 'text',
            type: 'string',
            required: true,
            defaultValue: { value: 'a string of words'},
            somethingElse: 'some-value'
        }
    ]

    return (
        <ThemeContext>
            <Table headings={headings} colNumber={4} rows={data} />
        </ThemeContext>
    )
}
`}
]