import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { ErrorPage } from "./error-page";


export const NotFound = () => {
  
  return (
    <ThemeContext>
      <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <ErrorPage code={404} title='Page not found' />
      </div>
    </ThemeContext>
  );
};

export const Error = () => {
  return (
    <ThemeContext>
        <ErrorPage code={500} title='Internal server error' />
    </ThemeContext>
  );
};



