import type { MDXProviderComponents } from '@mdx-js/react';

import { BlockQuote } from '@teambit/documenter.ui.block-quote';
import { Bold } from '@teambit/documenter.ui.bold';
import { ExternalLink } from '@teambit/documenter.routing.external-link';
import { h1, h2, h3, h4, h5, h6 } from '@teambit/documenter.markdown.heading';
import { Image } from '@teambit/documenter.ui.image';
import { InlineCode } from '@teambit/documenter.ui.inline-code';
import { Italic } from '@teambit/documenter.ui.italic';
import { Ol } from '@teambit/documenter.ui.ol';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import { Snippet } from '@teambit/documenter.markdown.hybrid-live-code-snippet';
import { Sup } from '@teambit/documenter.ui.sup';
import { Table } from '@teambit/documenter.ui.table.base-table';
import { Td } from '@teambit/documenter.ui.table.td';
import { Tr } from '@teambit/documenter.ui.table.tr';
import { Ul } from '@teambit/documenter.ui.ul';

export const defaultMdxComponents: MDXProviderComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p: Paragraph,
  code: Snippet,
  a: ExternalLink,
  inlineCode: InlineCode,
  ol: Ol,
  ul: Ul,
  hr: Separator,
  thematicBreak: Separator,
  img: Image,
  strong: Bold,
  em: Italic,
  pre: ({ children }) => children, // code provides its own built in `pre`
  sup: Sup,
  table: Table,
  tr: Tr,
  td: Td,
  blockquote: BlockQuote,
};
