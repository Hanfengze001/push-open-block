const dht11_2 = formatMessage => ({
    name: formatMessage({
        id: 'dht11.name',
        default: '温湿度模块'
    }),
    extensionId: 'dht11_2',
    version: '1.0.0',
    supportDevice: ['arduinoUno'],
    author: 'Han',
    iconURL: `asset/dth11.png`,
    description: formatMessage({
        id: 'dht11.description',
        default: '端口7.'
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

module.exports = dht11_2;
