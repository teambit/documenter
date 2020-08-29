import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { Separator } from "./separator"
import { Section } from "@teambit/documenter-temp.ui.section"

export const labels = ['react', 'ui-component', 'layout'];

export const examples = [
    {
    scope: {
        Separator,
        Section,
        ThemeContext
    },
    title: "Using the Seperator component.",
    code: `
<ThemeContext>

    <Section>
        SECTION A
    </Section>

    <Separator />

    <Section>
        SECTION B
    </Section>
    
</ThemeContext>
`}
]