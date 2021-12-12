import React from 'react';
import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { links } from './documentation-links';

export const ListOfAvailableLinks = () => {
  return <CodeSnippet>{JSON.stringify(links).replace(/,/g, ',\n')}</CodeSnippet>;
};
