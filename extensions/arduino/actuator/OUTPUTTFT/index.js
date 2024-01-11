const outputtft = formatMessage => ({
    name: formatMessage({
        id: 'OUTPUT.name',
        default: 'OUTPUT'
    }),
    extensionId: 'outputtft',
    version: '2.0.0',
    supportDevice: ['arduinoTFT'],
    author: 'Liu',
    iconURL: `asset/OUTPUTTFT.jpg`,
    description: formatMessage({
        id: 'OUTPUT.description',
        default: 'OUTPUT drive module.'
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

module.exports = outputtft;
