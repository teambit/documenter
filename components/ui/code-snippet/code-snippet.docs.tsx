import { CodeSnippet } from '@teambit/documenter.ui.code-snippet'
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions"

export const labels = ['react', 'ui-component', 'code snippet']
export const abstract = 'A syntax highlighter for React snippets.'

export const examples = [
    {
    scope: {
        CodeSnippet,
        ThemeCompositions
    },
    title: "Using the Code Snippet",
    description: `The Code Snippet uses the react-syntax-highlighter library. Use it to add snippets of code to your documentation.`,
    code: `
<ThemeCompositions>
    <div
    style={{
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '600px',
    }}
    >
    <CodeSnippet>
        function HelloWorld () {}
    </CodeSnippet>
    </div>
</ThemeCompositions>
`}
]


