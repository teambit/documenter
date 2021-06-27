export const labels = ['react', 'ui-component', 'label'];

import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { Label } from "./label";

export const examples = [
    {
    scope: {
        Label,
        ThemeCompositions
    },
    title: "Using the Label component",
    code: `
<ThemeCompositions>
    <Label>
        Label
    </Label>
</ThemeCompositions>
`},
{
    scope: {
        Label,
        ThemeCompositions
    },
    description: "Customizing styling",
    code: `
<ThemeCompositions>
    <Label style={{backgroundColor: '#414141', color: 'white'}}>
        Dark Label
    </Label>
</ThemeCompositions>
`}
]