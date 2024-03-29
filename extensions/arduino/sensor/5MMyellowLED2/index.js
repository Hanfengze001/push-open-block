/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const yellowLED2 = formatMessage => ({
    name: formatMessage({
        id: 'yellowLED.name',
        default: '5MM Yellow LED module'
    }),
    extensionId: 'yellowLED2',
    version: '1.0.0',
    supportDevice: ['arduinoUno'],
    author: 'MakerStudio',
    iconURL: `asset/yellowLED.png`,
    description: formatMessage({
        id: 'yellowLED.description',
        default: 'Yellow led module.',
        description: 'Description of Yellow LED'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['display'],
    helpLink: 'www.ddmagic.com/'
});

module.exports = yellowLED2;
