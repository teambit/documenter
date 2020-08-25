import { Anchor } from './anchor';
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { H1 } from "@teambit/documenter-temp.ui.heading"

export const labels = ['react', 'ui-component', 'link']

export const examples = [
    {
    scope: {
        Anchor,
        H1, 
        ThemeContext
    },
    title: "Using the Anchor component",
    description: `The Anchor compoennt can only link to itslef. 
    That is why you should always place it to either side of the title you wish to point to (to scroll to the same vertical point on the page).`,
    code: `
<ThemeContext>
    <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <H1 style={{marginRight: '10px'}}>A title with a link</H1>
        <Anchor href="this-example" />
    </div>
</ThemeContext>
`}
]
