import React from 'react';
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { PropTable } from "./prop-table";

export const labels = ['react', 'ui-component', 'table'];

export const abstract = "A table component that renders the properties of a component.";

const scope = {PropTable, ThemeContext}

export const examples = [
    {
    scope,
    title: "Using the Prop Table component.",
    description: (
        <>
            <p>The Prop Table renders an array of objects. The objects' shape and the corresponding table headers are not customizable.</p> <br/> 
            <p>Manually populating the Prop Table is discouraged as it should only use the component's code as a source of truth (this ensures the data displayed is always up-to-date).</p>
        </>
    ),
    code: `
() => {
    const data = [
        {
            name: 'text',
            type: 'string',
            defaultValue: {value: 'hello'},
            description: 'A demo text prop'
        },
        {
            name: 'year',
            type: 'number',
            defaultValue: {value: '2020'},
            description: 'A demo number prop',
            required: true
        }
    ]
    return (
        <ThemeContext>
            <PropTable rows={data} />
        </ThemeContext>
    )
}
`},
{
    scope,
    description: `Use the 'showListView' prop to display the data in a list view.`,
    code: `
() => {
    const data = [
        {
            name: 'text',
            type: 'string',
            defaultValue: {value: 'hello'},
            description: 'A demo text prop'
        },
        {
            name: 'year',
            type: 'number',
            defaultValue: {value: '2020'},
            description: 'A demo number prop',
            required: true
        }
    ]
    return (
        <ThemeContext>
            <PropTable rows={data} showListView />
        </ThemeContext>
    )
}
`},
{
    scope,
    description: `The Props Table can be configured to display a list view on a specified breaking point, using the 'listViewResolution' prop.`,
    code: `
() => {
    const data = [
        {
            name: 'text',
            type: 'string',
            defaultValue: {value: 'hello'},
            description: 'A demo text prop'
        },
        {
            name: 'year',
            type: 'number',
            defaultValue: {value: '2020'},
            description: 'A demo number prop',
            required: true
        }
    ]
    return (
        <ThemeContext>
            <PropTable rows={data} listViewResolution={700} />
        </ThemeContext>
    )
}
`}
]
