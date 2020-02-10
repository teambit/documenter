const { PipesExt } = require('bit-bin/dist/extensions/pipes');

module.exports = {
  name: 'extensions/react-ts',
  dependencies: [PipesExt],
  actions: {
    default: defaultAction,
    transpile: fooAction 
  },
  provider: async (config, [pipes, test]) => {
    return {};
  }
};

function fooAction(component) {
  console.log('hi from foo');
  
}

async function defaultAction(component) {
  const {stdout} = await component.capsule.run('./transpile');
  console.log(stdout);
}
