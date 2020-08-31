import React from 'react';
// import { CodeSnippet } from "./code-snippet";
import { Playground } from './react-playground';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';

const codeString = `<div>hello playground</div>`;

const functionString = `
() => {
  const Button = ({ children }) => (
      <button >{children}</button>
  );
  const scope = { Button };
  const code = "<Button>my first playground button</Button>";
      
  return <button>sfgsdfg </button>
}`

export const HelloWorld = () => {
  return (
    <ThemeContext>
      <Playground code={codeString} />
    </ThemeContext>
  );
};
export const FunctionExmple = () => {
  return (
    <ThemeContext>
      <Playground code={functionString} />
    </ThemeContext>
  );
};
