const BULETOOTH1 = formatMessage => ({
    name: formatMessage({
        id: 'BULETOOTH.name',
        default: 'BULETOOTH'
    }),
    extensionId: 'BULETOOTH1',
    version: '1.0.0',
    supportDevice: ['arduinoUno1', 'LGT8F328P1'],
    author: 'Liu',
    iconURL: `asset/BULETOOTH1.jpg`,
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

module.exports = BULETOOTH1;
