export const labels = ['react', 'ui-component', 'label list'];
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { LabelList } from "./label-list";

export const examples = [
    {
    scope: {
        LabelList,
        ThemeCompositions
    },
    title: "Using the Label List component",
    description: "The Label List renders an array as labels.",
    code: `
<ThemeCompositions>
    <LabelList>
        { ['first', 'second', 'third'] }
    </LabelList>
</ThemeCompositions>
`}
]

