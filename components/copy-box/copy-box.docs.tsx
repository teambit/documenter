export const labels = ['react', 'ui-component'];
import { ThemeContext } from "@teambit/documenter-temp.theme.theme-context";
import { CopyBox } from "./copy-box";

export const examples = [
    {
    scope: {
        CopyBox,
        ThemeContext
    },
    title: "Using the CopyBox component.",
    description: "CopyBox copies its (string) children to the clipboard. It should only be used for single-lines (for code-snippets, use the CodeSnippet component.) ",
    code: `
<ThemeContext>
    <CopyBox style={{width: "600px"}} >
        npm install @teambit/documenter.ui.copy-box
    </CopyBox>
</ThemeContext>
`}
]
