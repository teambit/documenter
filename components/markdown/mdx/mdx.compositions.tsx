import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

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
    <ThemeCompositions style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <MDXLayout>
        <AllMdExample />
      </MDXLayout>
    </ThemeCompositions>
  );
};

export const ButtonDocs = () => {
  return (
    <ThemeCompositions style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <MDXLayout>
        <ExampleButton />
      </MDXLayout>
    </ThemeCompositions>
  );
};
export const NoopDocs = () => {
  return (
    <ThemeCompositions style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <MDXLayout>
        <ExampleNoop />
      </MDXLayout>
    </ThemeCompositions>
  );
};
export const LinkDocs = () => {
  return (
    <ThemeCompositions style={{ padding: 16, maxWidth: 1440, margin: 'auto' }}>
      <MDXLayout>
        <ExampleLink />
      </MDXLayout>
    </ThemeCompositions>
  );
};
