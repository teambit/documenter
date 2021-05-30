import React from 'react';
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { CopyBox } from "./copy-box";

export const labels = ['react', 'ui-component'];

export const examples = [
    {
    scope: {
        CopyBox,
        ThemeCompositions
    },
    title: "Using the CopyBox component.",
    description: (
        <>
            <p>CopyBox copies its (string) children to the clipboard.</p> 
            <p>It should not be used for more than a single line. For code-snippets, use the CodeSnippet component, instead.</p>
        </>
        ),
    code: `
<ThemeCompositions>
    <CopyBox style={{width: "600px"}} >
        npm install @teambit/documenter.ui.copy-box
    </CopyBox>
</ThemeCompositions>
`}
]
