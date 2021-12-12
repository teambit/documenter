import React from 'react';
import { MDXLayout } from './mdx-layout';
// loading mdx files relies on bit's builtin mdx-loader support.
// @ts-ignore
import AllMdExample from './example-all-md.mdx';
// @ts-ignore
import ExampleButton from './example-button.mdx';
// @ts-ignore
import ExampleNoop from './example-noop.mdx';
// @ts-ignore
import ExampleLink from './example-routing-link.mdx';

export const Preview = () => {
  return (
    <MDXLayout style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <AllMdExample />
    </MDXLayout>
  );
};

export const ButtonDocs = () => {
  return (
    <MDXLayout style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <ExampleButton />
    </MDXLayout>
  );
};
export const NoopDocs = () => {
  return (
    <MDXLayout style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <ExampleNoop />
    </MDXLayout>
  );
};
export const LinkDocs = () => {
  return (
    <MDXLayout style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <ExampleLink />
    </MDXLayout>
  );
};
