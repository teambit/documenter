const { PipesExt } = require('bit-bin/dist/extensions/pipes');

module.exports = {
  name: 'extensions/react-ts',
  dependencies: [PipesExt],
  actions: {
    default: defaultAction,
    transpile: fooAction 
  },
  provider: async (config, [pipes]) => {
    return {};
  }
};

function fooAction(component) {
  const res = await component.capsule.run('./tranpile');
  
}

function defaultAction(component) {

}
