const { CreateExt } = require('bit-bin/extensions/create');
const { WorkspaceConfigExt } = require('bit-bin/extensions/workspace-config');

module.exports = {
  name: 'extensions/react-ts',
  // dependencies: [ CreateExt, WorkspaceConfigExt],
  dependencies: [ WorkspaceConfigExt],
  config: {

  },
  provider: async ([create, workspaceConfig]) => {
    console.log('am i running')

    const myConfig = workspaceConfig.workspaceSettings.getExtensionConfig(this.name);
    console.log(myConfig)
    create.register({ name: 'extensions/react-ts' }, getTemplates);
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
