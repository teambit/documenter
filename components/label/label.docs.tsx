export const labels = ['react', 'ui-component', 'label'];

import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { Label } from "./label";

export const examples = [
    {
    scope: {
        Label,
        ThemeContext
    },
    title: "Using the Label component",
    code: `
<ThemeContext>
    <Label>
        Label
    </Label>
</ThemeContext>
`},
{
    scope: {
        Label,
        ThemeContext
    },
    description: "Customizing styling",
    code: `
<ThemeContext>
    <Label style={{backgroundColor: '#414141', color: 'white'}}>
        Dark Label
    </Label>
</ThemeContext>
`}
]