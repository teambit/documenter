import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { BlockQuote } from './block-quote';

export const BlockQuoteExample = () => {
  return (
    <ThemeCompositions>
      <BlockQuote>
        block quote level 1<BlockQuote>block quote level 2</BlockQuote>
        <BlockQuote>block quote level 2</BlockQuote>
        <BlockQuote>
          block quote level 2<BlockQuote>block quote level 3</BlockQuote>
          <BlockQuote>block quote level 3</BlockQuote>
          <BlockQuote>block quote level 3</BlockQuote>
        </BlockQuote>
      </BlockQuote>
    </ThemeCompositions>
  );
};
