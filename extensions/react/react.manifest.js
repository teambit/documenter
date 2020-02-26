const { ScriptsExt } = require('bit-bin/extensions/scripts');
const { CreateExt } = require('bit-bin/extensions/create');

module.exports = {
  name: 'extensions/react-ts',
  dependencies: [ScriptsExt, CreateExt],
  config: {

  },
  provider: async (config, [scripts, create]) => {
    scripts.register({name: 'extensions/react-ts'}, './transpile');
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
