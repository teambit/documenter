import { React } from '@teambit/react';
import { Envs } from '@teambit/envs';
import { ReactBitDevEnv } from './react-bitdev.env';

export class ReactBitDev {
  static dependencies = [React, Envs];

  static provider([envs, react]) {
    react.defineTsConfig({ declerations: true });
    envs.register(compose(react.env, new ReactBitDevEnv(react)));
    return new ReactBitDev();
  }
}
