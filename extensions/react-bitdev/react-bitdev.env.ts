import { Tester } from '@teambit/tester';
import { React } from '@teambit/react';

/**
 * Allows to override the implemntation of Environment services and extend to new.
 */
export class ReactBitDevEnv {
  /**
   * a custom compiler can be defined here.
   */
  // compiler(components: Component[]) {
  //   return this.react.createTsCompiler({
  //     declration: true
  //   });
  // }

  /**
   * a custom tester can be defined here.
   */
  // tester(): Tester {
    // return this.react.createJestTester(jestConfig);
  // }
}
