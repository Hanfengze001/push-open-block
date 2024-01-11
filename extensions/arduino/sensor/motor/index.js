const MOTOR = formatMessage => ({
    name: formatMessage({
        id: 'motor.name',
        default: '电机模块'
    }),
    extensionId: 'motor',
    version: '1.0.0',
    supportDevice: ['arduinoUno'],
    author: 'Han',
    iconURL: `asset/dth11.png`,
    description: formatMessage({
        id: 'motor.description',
        default: '电机模块'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.rkyq.net'
});

module.exports = MOTOR;
