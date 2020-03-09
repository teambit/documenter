const { CreateExt } = require('bit-bin/extensions/create');

module.exports = {
  name: 'extensions/react-ts',
  dependencies: [CreateExt],
  config: {

  },
  provider: async ([create]) => {
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
