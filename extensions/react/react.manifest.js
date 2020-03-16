const { CreateExt } = require('bit-bin/extensions/create');
const { WorkspaceConfigExt } = require('bit-bin/extensions/workspace-config');

const EXT_NAME = 'extensions/react-ts';

module.exports = {
  name: EXT_NAME,
  // dependencies: [ CreateExt, WorkspaceConfigExt],
  dependencies: [ WorkspaceConfigExt],
  config: {

  },
  // provider: async ([create, workspaceConfig]) => {
  provider: async ([workspaceConfig]) => {
    const myConfig = workspaceConfig.workspaceSettings.getExtensionConfig(EXT_NAME);
    create.register({ name: EXT_NAME }, getTemplates);
    return {

    };
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
