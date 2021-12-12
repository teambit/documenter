import React from 'react';
import { BlockQuote } from './block-quote';

export const BlockQuoteExample = () => {
  return (
    <BlockQuote>
      block quote level 1<BlockQuote>block quote level 2</BlockQuote>
      <BlockQuote>block quote level 2</BlockQuote>
      <BlockQuote>
        block quote level 2<BlockQuote>block quote level 3</BlockQuote>
        <BlockQuote>block quote level 3</BlockQuote>
        <BlockQuote>block quote level 3</BlockQuote>
      </BlockQuote>
    </BlockQuote>
  );
};
