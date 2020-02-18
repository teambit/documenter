const { ScriptsExt } = require('bit-bin/extensions/scripts');

module.exports = {
  name: 'extensions/react-ts',
  dependencies: [ScriptsExt],
  config: {

  },
  provider: async (config, [scripts]) => {
    scripts.register({name: 'extensions/react-ts'}, './transpile');
    return {
      
    };
  }
};
