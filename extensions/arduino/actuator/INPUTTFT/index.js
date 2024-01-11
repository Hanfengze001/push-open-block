const inputtft = formatMessage => ({
    name: formatMessage({
        id: 'INPUT.name',
        default: 'INPUT'
    }),
    extensionId: 'inputtft',
    version: '2.0.0',
    supportDevice: ['arduinoTFT'],
    author: 'Liu',
    iconURL: `asset/INPUTTFT.jpg`,
    description: formatMessage({
        id: 'INPUT.description',
        default: 'INPUT drive module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: ''
});

module.exports = inputtft;
