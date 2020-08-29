import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context"
import { Section } from "./section"

export const labels = ['react', 'ui-component', 'container'];

export const examples = [
    {
    scope: {
        Section,
        ThemeContext
    },
    title: "Using the Section component.",
    code: `
<ThemeContext>
    <Section className="custom-section">
        This is a section.
    </Section>
</ThemeContext>
`}
]