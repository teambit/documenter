import React from 'react';

export type LogoProps = {
  /**
   * logo text.
   */
  text?: string
}

/**
 * Logo component.
 */
export function Logo({ text }: LogoProps) {
  return <div style={{ background: 'red' }}>{text}</div>;
}

Logo.defaultProps = {
  text: 'Bit'
};
