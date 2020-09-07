export const labels = ['react', 'ui-component', 'title'];

import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { H1, H2, H3, H4, H5, H6 } from "./heading";

export const examples = [
    {
    scope: {
        H1,
        H2,
        H3,
        H4,
        H5,
        H6,
        ThemeContext
    },
    title: "Using the Header component",
    description: "A set of six header sizes are available in the Header component.",
    code: `
// import { H1, H2, H3, H4, H5, H6 }  from '@teambit/documenter.ui.heading'
<ThemeContext>  
    <H1>Header 1</H1>
    <H2>Header 2</H2>
    <H3>Header 3</H3>
    <H4>Header 4</H4>
    <H5>Header 5</H5>
    <H6>Header 6</H6>
</ThemeContext>
`},
{
    scope:
    { 
        H1,
        ThemeContext
    },
    description: "Customizing a header's size.",
    code: `
// import { H1 }  from '@teambit/documenter.ui.heading
<ThemeContext>
    <H1 size="md">A medium-size Header 1</H1>
</ThemeContext>
    `
},
]