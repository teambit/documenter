import React from 'react';
import { InlineCode, InlineCodeProps } from '@teambit/documenter.ui.inline-code';

export type HighlightedTextProps = Omit<InlineCodeProps, 'highlight'>;

/**
 * A <p> element with text highlighting
 */
export function HighlightedText(props: HighlightedTextProps) {
  return <InlineCode {...props} highlight />;
}
