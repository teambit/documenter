import React from 'react';
import { Playground } from './react-playground';
import { HighlightedText } from '@teambit/documenter.ui.highlighted-text';

import {
  Example,
  Abstract,
  Labels,
} from '@teambit/documenter.types.docs-file';

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
        The <HighlightedText>scope</HighlightedText> prop defines the
        dependencies used in the code snippet. React is set by default (though other objects from the React library should be set explicitly)
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
