import { ConsumableLink } from "./consumable-link";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";

export const labels = ['react', 'ui-component']

export const abstract = 'A component to display copyable links to a package.'

export const examples = [
    {
    scope: {
        ConsumableLink,
        ThemeContext
    },
    title: "Using the Consumable Link component",
    code: `
<ThemeContext>
    <div style={{maxWidth: "600px"}}>
        <ConsumableLink title="Component ID" link="@teambit/documenter.ui.consumable-link" />
    </div>
</ThemeContext>
`}
]