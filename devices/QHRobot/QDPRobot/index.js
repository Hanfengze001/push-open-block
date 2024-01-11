const QDPRobot = formatMessage => ({
    name: 'rkyq UNO',
    deviceId: 'QDPRobot_arduinoUnoUltra',
    manufactor: 'RKYQtop',
    learnMore: 'http://rkyq.net',
    iconURL: 'asset/QDPRobot.png',
    description: formatMessage({
        id: 'RKYQtop.description',
        default: 'RKYQtop.',
        description: 'Description for the RKYQ robot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/QDPRobot-illustration.svg',
    connectionSmallIconURL: 'asset/QDPRobot-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['QDPRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'http://gx.qdprobot.com/'
});

module.exports = QDPRobot;
