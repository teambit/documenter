import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { Separator } from "./separator"
import { Section } from "@teambit/documenter.ui.section"

export const labels = ['react', 'ui-component', 'layout'];

export const examples = [
    {
    scope: {
        Separator,
        Section,
        ThemeCompositions
    },
    title: "Using the Seperator component.",
    code: `
<ThemeCompositions>

    <Section>
        SECTION A
    </Section>

    <Separator />

    <Section>
        SECTION B
    </Section>
    
</ThemeCompositions>
`}
]