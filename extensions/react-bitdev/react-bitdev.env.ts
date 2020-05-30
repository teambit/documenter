import ts from "typescript";

/**
 * A React component environment configured with best practices for teambit.
 */
export class ReactBitDevEnv {
  constructor(
    react: React
  ) {}

  compile(components: Component[]) {
    return this.react.createTsCompiler({
      declration: true
    });
  }

  build(components: Component[]) {

  }
  
  test(components: Component[]) {
    return this.jest.createJestTester(components, jestConfig);
  }

  lint() {

  }

  renderDocs() {

  }

  release() {
    return ['compile', 'test'];
  }

  use() {

  }

  dev() {

  }
}
