const { ScriptsExt } = require('bit-bin/dist/extensions/scripts');

module.exports = {
  name: 'extensions/react-ts',
  dependencies: [ScriptsExt],
  provider: async (config, [scripts]) => {
    scripts.register({name: 'extensions/react-ts'}, './transpile');
    return {};
  }
};
