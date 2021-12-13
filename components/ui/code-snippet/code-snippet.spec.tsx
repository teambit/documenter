import React from 'react';
import { render } from '@testing-library/react';
import { CodeSnippetExample } from './code-snippet.composition';

describe('Code snippet', () => {
  it('should render', () => {
    const { getByTestId } = render(<CodeSnippetExample />);
    const rendered = getByTestId('test-code-snippet');

    expect(rendered).toBeInTheDocument();
  });
  it('should render with code text', () => {
    const { getByText } = render(<CodeSnippetExample />);
    const rendered = getByText('export');

    expect(rendered).toBeTruthy();
  });
});
