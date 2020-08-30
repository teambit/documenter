import { Anchor } from './anchor';
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { H5 } from "@teambit/documenter-temp.ui.heading"

export const labels = ['react', 'ui-component', 'link']

export const examples = [
    {
    scope: {
        Anchor,
        H5, 
        ThemeContext
    },
    title: "Using the Anchor component",
    description: `The Anchor component can only link to itself. 
Place it to either side of the title you wish to point to, to have it scroll to the same vertical point on the page.`,
    code: `
<ThemeContext>
    <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <H5 style={{marginRight: '10px'}}>A title with a link</H5>
        <Anchor href="this-example" />
    </div>
</ThemeContext>
`}
]
