const redButton2 = formatMessage => ({
    name: formatMessage({
        id: '红色按键',
        default: 'redButton detection module'
    }),
    extensionId: 'redButton2',
    version: '1.0.0',
    supportDevice: ['arduinoUno'],
    author: 'Han',
    iconURL: `asset/redButton.png`,
    description: formatMessage({
        id: 'redButton.description',
        default: 'redButton sensor switch.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.ddmagic.com'
});

module.exports = redButton2;
