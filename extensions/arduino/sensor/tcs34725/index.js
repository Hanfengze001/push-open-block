const tcs34725 = formatMessage => ({
    name: formatMessage({
        id: 'tcs34725.name',
        default: '颜色传感器'
    }),
    extensionId: 'tcs34725',
    version: '1.0.0',
    supportDevice: ['arduinoUno'],
    author: 'Han',
    iconURL: `asset/tcs34725.png`,
    description: formatMessage({
        id: 'tcs34725.description',
        default: '端口7/端口5.'
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

module.exports = tcs34725;
