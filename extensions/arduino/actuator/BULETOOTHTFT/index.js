const BULETOOTHTFT = formatMessage => ({
    name: formatMessage({
        id: 'BULETOOTH.name',
        default: 'BULETOOTH'
    }),
    extensionId: 'BULETOOTHTFT',
    version: '2.0.0',
    supportDevice: ['arduinoTFT'],
    author: 'Liu',
    iconURL: `asset/BULETOOTHTFT.jpg`,
    description: formatMessage({
        id: 'BULETOOTH.description',
        default: 'BULETOOTH REMOTE.'
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

module.exports = BULETOOTHTFT;
