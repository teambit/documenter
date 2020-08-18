import React from 'react';
import { Abstract } from './docs-file';
import { CodeSnippet } from '@teambit/documenter-temp.ui.code-snippet';
import { H3 } from '@teambit/documenter-temp.ui.heading';

export const abstract: Abstract =
  'Defines how a docs file is constructed, and supplies type for each export';

export default () => (
  <div>
    <H3>Example docs file</H3>

    <CodeSnippet>
      {`export const labels = ["react", "ui", "button"]

export const abstract = "A reusable button component.";

export default = () => (
  <div>Buttons communicate actions that users can take. For examples:
    <ul>
      <li>forms</li>
      <li>menus</li>
      <li>basically everywhere</li>
    </ul>
  </div>
);

export const examples = [
  {
    title: "Outlined button";
    description: "The outline prop can be used to add border to the button";
    scope: { Button: Button };
    code: \`<Button outline={true}>outlined</Button>\`;
  },
  {
    title: "full button";
    description: "The full prop can be used to set background to the button";
    scope: { Button: Button };
    code: \`<Button background={true}>outlined</Button>\`;
  },
]`}
    </CodeSnippet>
  </div>
);
