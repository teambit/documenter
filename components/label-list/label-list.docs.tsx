export const labels = ['react', 'ui-component', 'label list'];
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { LabelList } from "./label-list";

export const examples = [
    {
    scope: {
        LabelList,
        ThemeContext
    },
    title: "Using the Label List component",
    description: "The Label List renders an array as labels.",
    code: `
<ThemeContext>
    <LabelList>
        { ['first', 'second', 'third'] }
    </LabelList>
</ThemeContext>
`}
]

