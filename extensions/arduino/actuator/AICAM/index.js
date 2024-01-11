const aicam = formatMessage => ({
    name: formatMessage({
        id: 'AICAM.name',
        default: 'AICAM'
    }),
    extensionId: 'AICAM',
    version: '2.0.0',
    supportDevice: ['LGT8F328P', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560'],
    author: 'Liu',
    iconURL: `asset/AICAM.jpg`,
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

module.exports = aicam;
