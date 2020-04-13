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
    const myConfig = workspaceConfig.workspaceSettings.getExtensionConfig(EXT_NAME);
    // create.register({ name: EXT_NAME }, getTemplates);
    component.registerAddConfig(EXT_NAME, config => {
      return {
        'some-key-added-by-react': 'some-val-added-by-react',
        extensions: {
          'extensions/dummy': {
            'some-key-for-dummy': 'some-val-for-dummy'
          }
        }
      };
    });
    return {};
  }
};

function getTemplates(name) {
  return {
    files: [
      { path: `${name}.js`, content: `export default function ${name}() { console.log('hello react'); }` },
      { path: `${name}.spec.js`, content: `export default function ${name}() { console.log('hello test'); }` }
    ],
    main: `${name}.js`
  };
}
