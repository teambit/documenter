import { ConsumableLink } from "./consumable-link";
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";

export const labels = ['react', 'ui-component']

export const abstract = 'A component to display copyable links to a package.'

export const examples = [
    {
    scope: {
        ConsumableLink,
        ThemeCompositions
    },
    title: "Using the Consumable Link component",
    code: `
<ThemeCompositions>
    <div style={{maxWidth: "600px"}}>
        <ConsumableLink title="Component ID" link="@teambit/documenter.ui.consumable-link" />
    </div>
</ThemeCompositions>
`}
]