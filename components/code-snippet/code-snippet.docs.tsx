import { CodeSnippet } from '@teambit/documenter-temp.ui.code-snippet'
import { ThemeContext } from '@teambit/documenter-temp.theme.theme-context'

export const labels = ['react', 'ui-component', 'code snippet']
export const abstract = 'A syntax highlighter for React snippets.'

export const examples = [
    {
    scope: {
        CodeSnippet,
        ThemeContext
    },
    title: "Using the Code Snippet",
    description: `The Code Snippet uses the react-syntax-highlighter library. Use it to add snippets of code to your documentation.`,
    code: `
<ThemeContext>
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
</ThemeContext>
`}
]


