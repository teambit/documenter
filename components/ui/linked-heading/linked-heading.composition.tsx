import React from 'react';
import { LinkedHeading } from './linked-heading';

export const Large = () => {
  return (
    <LinkedHeading element="h1" link="link">
      large h1
    </LinkedHeading>
  );
};

export const Default = () => {
  return <LinkedHeading link="link">default</LinkedHeading>;
};

export const Small = () => {
  return (
    <LinkedHeading size="sm" link="link">
      small
    </LinkedHeading>
  );
};
