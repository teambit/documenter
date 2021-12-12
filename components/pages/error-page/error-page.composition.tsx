import React from 'react';
import { ErrorPage } from './error-page';

export const NotFound = () => {
  return <ErrorPage code={404} title="Page not found" style={{ display: 'inline-flex', alignItems: 'center' }} />;
};

export const Error = () => {
  return (
    <ErrorPage code={500} title="Internal server error" style={{ display: 'inline-flex', alignItems: 'center' }} />
  );
};
