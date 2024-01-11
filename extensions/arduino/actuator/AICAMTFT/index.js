const aicamtft = formatMessage => ({
    name: formatMessage({
        id: 'AICAM.name',
        default: 'AICAM'
    }),
    extensionId: 'AICAMTFT',
    version: '2.0.0',
    supportDevice: ['arduinoTFT'],
    author: 'Liu',
    iconURL: `asset/AICAMTFT.jpg`,
    description: formatMessage({
        id: 'AICAM.description',
        default: 'AICAM.'
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

module.exports = aicamtft;
