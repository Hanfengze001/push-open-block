const mpu6050 = formatMessage => ({
    name: formatMessage({
        id: '陀螺仪',
        default: '陀螺仪 Sensor'
    }),
    extensionId: 'gyro_value',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'Han',
    iconURL: `asset/mpu6050.png`,
    description: formatMessage({
        id: 'mpu6050.description',
        default: '6-axis attitude sensor module based on MPU6050.'
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

module.exports = mpu6050;
