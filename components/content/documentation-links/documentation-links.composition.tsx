import React from 'react'
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions'
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet'
import { links } from './documentation-links'
export const ListOfAvailableLinks = () => {
  return (
    <ThemeCompositions>
      <CodeSnippet>{JSON.stringify(links).replace(/,/g, ',\n')}</CodeSnippet>
    </ThemeCompositions>
  )
}
