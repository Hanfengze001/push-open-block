/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#B943FF';
    const secondaryColour = '#9900FF';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.infrared_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INFRARED_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
							[Blockly.Msg.IR_L3, 'A0'],
							[Blockly.Msg.IR_R3, 'A1'],
							[Blockly.Msg.IR_L4, 'A3'],
							[Blockly.Msg.IR_R4, 'A2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.infrared_value1 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INFRARED_VALUE1,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
							[Blockly.Msg.IR_L1, '11'],
							[Blockly.Msg.IR_R1, '3'],
							[Blockly.Msg.IR_L2, '6'],
							[Blockly.Msg.IR_R2, '5'],
							[Blockly.Msg.IR_L3, 'A0'],
							[Blockly.Msg.IR_R3, 'A1'],
							[Blockly.Msg.IR_L4, 'A3'],
							[Blockly.Msg.IR_R4, 'A2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
	
    Blockly.Blocks.sound_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOUND_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'portsAD',
                        options: [
							[Blockly.Msg.portsAD3, 'A1'],
							[Blockly.Msg.portsAD4, 'A2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.lightsensor_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LIGHTSENSOR_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '6'],
                            [Blockly.Msg.PO3, 'A0'],
                            [Blockly.Msg.PO4, 'A3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
	
    Blockly.Blocks.gray_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GRAY_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'portsAD',
                        options: [
							[Blockly.Msg.portsAD3, 'A1'],
							[Blockly.Msg.portsAD4, 'A2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'LEDstate',
                        options: [
                            [Blockly.Msg.LEDON, '1'],
                            [Blockly.Msg.LEDOFF, '0']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.pir_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PIR_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '6'],
                            [Blockly.Msg.PO3, 'A0'],
                            [Blockly.Msg.PO4, 'A3'],
                            [Blockly.Msg.PO5, '8'],
                            [Blockly.Msg.PO6, '0'],
                            [Blockly.Msg.PO7, '9'],
                            [Blockly.Msg.PO8, '10']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.button_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BUTTON_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO1, '11'],
                            [Blockly.Msg.PO2, '6'],
                            [Blockly.Msg.PO3, 'A0'],
                            [Blockly.Msg.PO4, 'A3'],
                            [Blockly.Msg.PO5, '8'],
                            [Blockly.Msg.PO6, '0'],
                            [Blockly.Msg.PO7, '9'],
                            [Blockly.Msg.PO8, '10']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
	
    Blockly.Blocks.ultrasonic_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ULTRASONIC_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'TPORT',
                        options: [
                            [Blockly.Msg.tport1, '3'],
                            [Blockly.Msg.tport2, '5'],
                            [Blockly.Msg.tport3, 'A1'],
                            [Blockly.Msg.tport4, 'A2'],
                            [Blockly.Msg.tport5, '7'],
                            [Blockly.Msg.tport6, '1'],
                            [Blockly.Msg.tport7, '4'],
                            [Blockly.Msg.tport8, '12']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sht_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SHT_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SHT',
                        options: [
                            [Blockly.Msg.Temp, 'readTemperature'],
                            [Blockly.Msg.Hum, 'readHumidity']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
    Blockly.Blocks.gyro_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GYRO_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'GYRO',
                        options: [
                            [Blockly.Msg.gyro_x, 'x'],
                            [Blockly.Msg.gyro_y, 'y'],
                            [Blockly.Msg.gyro_z, 'z']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
	
    Blockly.Blocks.gyro_value2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GYRO_VALUE2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'direction',
                        options: [
                            [Blockly.Msg.front, '1'],
                            [Blockly.Msg.back, '2'],
                            [Blockly.Msg.right, '3'],
                            [Blockly.Msg.left, '4']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
	
    Blockly.Blocks.gyro_value3 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GYRO_VALUE3,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
	
    Blockly.Blocks.color_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COLOR_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            [Blockly.Msg.red, '2'],
                            [Blockly.Msg.yellow, '4'],
                            [Blockly.Msg.green, '5'],
                            [Blockly.Msg.blue, '7']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.color_value2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COLOR_VALUE2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO7, '1'],
                            [Blockly.Msg.PO8, '2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            ['R', '0'],
                            ['G', '1'],
                            ['B', '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.color_value3 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COLOR_VALUE3,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR',
                        options: [
                            ['R', '0'],
                            ['G', '1'],
                            ['B', '2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };
	
    Blockly.Blocks.gesture_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.GESTURE_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'gesture',
                        options: [
                            [Blockly.Msg.Forward, '1'],
                            [Blockly.Msg.Backward, '2'],
                            [Blockly.Msg.Right, '3'],
                            [Blockly.Msg.Left, '4'],
                            [Blockly.Msg.Up, '5'],
                            [Blockly.Msg.Down, '6'],
                            [Blockly.Msg.Clockwise, '7'],
                            [Blockly.Msg.anticlockwise, '8'],
                            [Blockly.Msg.wave, '9']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

	
    return Blockly;
}

exports = addBlocks;
