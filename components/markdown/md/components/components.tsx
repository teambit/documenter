import React, { ReactNode } from 'react';

import { CodeSnippet } from '@teambit/documenter.ui.code-snippet';
import { BlockQuote } from '@teambit/documenter.ui.block-quote';
import { Bold } from '@teambit/documenter.ui.bold';
import { ExternalLink } from '@teambit/documenter.routing.external-link';
import { Image } from '@teambit/documenter.ui.image';
import { Italic } from '@teambit/documenter.ui.italic';
import { Ol } from '@teambit/documenter.ui.ol';
import { Paragraph } from '@teambit/documenter.ui.paragraph';
import { Separator } from '@teambit/documenter.ui.separator';
import { Sup } from '@teambit/documenter.ui.sup';
import { Table } from '@teambit/documenter.ui.table.base-table';
import { Td } from '@teambit/documenter.ui.table.td';
import { Tr } from '@teambit/documenter.ui.table.tr';
import { Ul } from '@teambit/documenter.ui.ul';

import { h1, h2, h3, h4, h5, h6 } from '@teambit/documenter.markdown.heading';
import { Code } from './code';

// inline functions removes unwanted props, that should not become html attributes

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  a: ExternalLink,
  blockquote: BlockQuote,
  code: Code,
  em: Italic,
  hr: Separator,
  img: Image,
  p: Paragraph,
  // code includes it's own pre tag
  pre: ({ children }: { children: ReactNode }) => <>{children}</>,
  strong: Bold,
  sup: Sup,
  table: Table,
  thematicBreak: Separator,
  td: ({ isHeader, ...rest }: any) => <Td {...rest} />,
  tr: Tr,
  // th: ({ isHeader, ...rest }: any) => <Th {...rest} />,
  // li: ({ ordered, depth, checked, ...rest}: any) => <li {...rest}/>,
  ol: ({ ordered, depth, ...rest }: any) => <Ol {...rest} />,
  ul: ({ ordered, depth, ...rest }: any) => <Ul {...rest} />,
};
