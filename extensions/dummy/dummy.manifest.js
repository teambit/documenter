const ComponentFactoryExt = require('bit-bin').ComponentFactoryExt;
const EXT_NAME = 'extensions/dummy';

module.exports = {
  name: EXT_NAME,
  dependencies: [ComponentFactoryExt],
  provider: async ([component]) => {
    console.log('this is a dummy extension configured by the react extension');
  }
};
