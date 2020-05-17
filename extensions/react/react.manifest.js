const { CreateExt } = require('bit-bin/extensions/create');
const { WorkspaceConfigExt } = require('bit-bin/extensions/workspace-config');
const {ComponentFactoryExt} = require('bit-bin');

const EXT_NAME = 'extensions/react-ts';

module.exports = {
  name: EXT_NAME,
  // dependencies: [ CreateExt, WorkspaceConfigExt, component],
  dependencies: [ WorkspaceConfigExt, ComponentFactoryExt],
  config: {

  },
  // provider: async ([create, workspaceConfig, component]) => {
  provider: async ([workspaceConfig, component]) => {
    return {
      defineCompiler
    };
  }
};

const defineCompiler = () => ({ taskFile: 'transpile' });

function getTemplates(name) {
  return {
    files: [
      { path: `${name}.js`, content: `export default function ${name}() { console.log('hello react'); }` },
      { path: `${name}.spec.js`, content: `export default function ${name}() { console.log('hello test'); }` }
    ],
    main: `${name}.js`
  };
}
