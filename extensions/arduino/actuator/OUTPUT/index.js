const output = formatMessage => ({
    name: formatMessage({
        id: 'OUTPUT.name',
        default: 'OUTPUT'
    }),
    extensionId: 'output',
    version: '2.0.0',
    supportDevice: ['arduinoUno'],
    author: 'Liu',
    iconURL: `asset/OUTPUT.jpg`,
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

module.exports = output;
