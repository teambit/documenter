const { PipesExt } = require('bit-bin/dist/extensions/pipes');

module.exports = {
  name: 'extensions/react-ts',
  dependencies: [PipesExt],
  scripts: {
    default: './transpile'
  },
  provider: async (config, [pipes]) => {
    // we need to learn which context of the extension.
    pipes.registerScript({name: 'extensions/react-ts'}, 'default', './transpile');
  }
};
