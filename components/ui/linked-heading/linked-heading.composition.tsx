import React from 'react';
import { LinkedHeading } from './linked-heading';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

export const Large = () => {
  return (
    <ThemeCompositions>
      <LinkedHeading element="h1" link="link">
        large h1
      </LinkedHeading>
    </ThemeCompositions>
  );
};

export const Default = () => {
  return (
    <ThemeCompositions>
      <LinkedHeading link="link">default</LinkedHeading>
    </ThemeCompositions>
  );
};

export const Small = () => {
  return (
    <ThemeCompositions>
      <LinkedHeading size="sm" link="link">
        small
      </LinkedHeading>
    </ThemeCompositions>
  );
};
