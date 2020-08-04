import React from 'react';
import { Paragraph } from '@teambit/documenter-temp.ui.paragraph';
import { Section } from '@teambit/documenter-temp.ui.section';
import { LinkedHeading } from './linked-heading';

export default () => {
  return (
    <Section>
      <LinkedHeading link='overview'>Summary</LinkedHeading>
      <Paragraph>
        Links are used as navigational elements and can be used on their own or inline with text. 
        They provide a lightweight option for navigation but like other interactive elements, too 
        many links will clutter a page and make it difficult for users to identify their next steps. 
        This is especially true for inline links, which should be used sparingly.
      </Paragraph>
    </Section>
  );
};

export const labels = ['react', 'ui-component', 'heading', 'link'];
