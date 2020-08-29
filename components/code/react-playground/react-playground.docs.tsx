import React from 'react';
import { Playground } from './react-playground';
import { HighlightedText } from '@teambit/documenter-temp.ui.highlighted-text';

import {
  Example,
  Abstract,
  Labels,
} from '@teambit/documenter-temp.types.docs-file';

export const labels: Labels = [
  'react',
  'ui-component',
  'code',
  'react-live',
  'preview',
  'example',
  'document',
];

export const abstract: Abstract =
  'A react-live wrapper with document oriented features.';

export const examples: Example[] = [
  {
    title: 'Injecting dependencies',
    description: (
      <>
        The prop <HighlightedText>scope</HighlightedText> defines any global
        dependencies appearing in the code snippet. This includes React, which
        is injected by default (not including other objects from the React library, like 'useState', etc.)
      </>
    ),
    scope: { Playground },
    code: `() => {
  const Button = ({ children }) => (
      <button style={{ background: 'lightgreen', border: 'none' }}>{children}</button>
  );
  const scope = { Button };
  const code = "<Button>my first playground button</Button>";
      
  return <Playground code={code} scope={scope}/>
}`,
  },
];
