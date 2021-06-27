import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ErrorPage } from './error-page';

export const NotFound = () => {
  return (
    <ThemeCompositions>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <ErrorPage code={404} title="Page not found" />
      </div>
    </ThemeCompositions>
  );
};

export const Error = () => {
  return (
    <ThemeCompositions>
      <ErrorPage code={500} title="Internal server error" />
    </ThemeCompositions>
  );
};
