import React from 'react';
import { Playground } from './react-playground';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

const codeString = `<div>hello playground</div>`;

const functionString = `
() => {
  const Button = ({ children }) => (
      <button >{children}</button>
  );
  const scope = { Button };
  const code = "<Button>my first playground button</Button>";
      
  return <button>Click Here</button>
}`;

export const HelloWorld = () => {
  return (
    <ThemeCompositions>
      <div style={{ width: '400px' }}>
        <Playground code={codeString} />
      </div>
    </ThemeCompositions>
  );
};
export const FunctionExmple = () => {
  return (
    <ThemeCompositions>
      <div style={{ width: '600px' }}>
        <Playground code={functionString} />
      </div>
    </ThemeCompositions>
  );
};