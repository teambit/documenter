import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { Subtitle } from './sub-title'

export const labels = ['react', 'ui-component', 'text'];

export const examples = [
    {
    scope: {
        Subtitle,
        ThemeCompositions
    },
    title: "Using the Subtitle component.",
    description: `The subtitle component renders a "muted" extra-large text (as a 'p' element).`,
    code: `
<ThemeCompositions>
    <Subtitle >
        This is a subtitle
    </Subtitle>
</ThemeCompositions>
`}
]