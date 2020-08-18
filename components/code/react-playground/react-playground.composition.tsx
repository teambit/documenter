import React from 'react';
// import { CodeSnippet } from "./code-snippet";
import { Playground } from './react-playground';
import { ThemeContext } from '@teambit/documenter-temp.theme.theme-context';

const codeString = `<div>hello playground</div>`;

export const HelloWorld = () => {
  return (
    <ThemeContext>
      <Playground code={codeString} />
    </ThemeContext>
  );
};
