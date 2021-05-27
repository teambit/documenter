import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions"
import { Section } from "./section"

export const labels = ['react', 'ui-component', 'container'];

export const examples = [
    {
    scope: {
        Section,
        ThemeCompositions
    },
    title: "Using the Section component.",
    code: `
<ThemeCompositions>
    <Section className="custom-section">
        This is a section.
    </Section>
</ThemeCompositions>
`}
]