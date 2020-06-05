import { React } from '@teambit/react';
import { Envs, compose } from '@teambit/envs';
import { ReactBitDevEnv } from './react-bitdev.env';

/**
 * custom environment definition for the specific needs and standards of bit.dev internally.
 */
export class ReactBitDev {
  static dependencies = [React, Envs];

  static provider([envs, react]) {
    react.overrideTsConfig({ declerations: true });
    react.overrideJestConfig(require.resolve('./jest/jest.config.js'));

    envs.register(compose(
      {
      }
    ));

    return new ReactBitDev();
  }
}
te