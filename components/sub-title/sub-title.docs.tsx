import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { Subtitle } from './sub-title'

export const labels = ['react', 'ui-component', 'text'];

export const examples = [
    {
    scope: {
        Subtitle,
        ThemeContext
    },
    title: "Using the Subtitle component.",
    description: `The subtitle component renders a "muted" extra-large text (as a 'p' element).`,
    code: `
<ThemeContext>
    <Subtitle >
        This is a subtitle
    </Subtitle>
</ThemeContext>
`}
]