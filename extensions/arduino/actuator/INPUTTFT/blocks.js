/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#B943FF';
    const secondaryColour = '#9900FF';

    Blockly.Blocks.infrared_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INFRARED_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: [
							[Blockly.Msg.IR_L1, '10'],
							[Blockly.Msg.IR_R1, '1'],
							[Blockly.Msg.IR_L2, '16'],
							[Blockly.Msg.IR_R2, '15'],
							[Blockly.Msg.IR_L7, '13'],
							[Blockly.Msg.IR_R7, '14'],
							[Blockly.Msg.IR_L8, '20'],
							[Blockly.Msg.IR_R8, '19']
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
							[Blockly.Msg.IR_L1, '10'],
							[Blockly.Msg.IR_R1, '1'],
							[Blockly.Msg.IR_L2, '16'],
							[Blockly.Msg.IR_R2, '15'],
							[Blockly.Msg.IR_L3, '21'],
							[Blockly.Msg.IR_R3, '12'],
							[Blockly.Msg.IR_L4, '48'],
							[Blockly.Msg.IR_R4, '7'],
							[Blockly.Msg.IR_L5, '36'],
							[Blockly.Msg.IR_R5, '11'],
							[Blockly.Msg.IR_L6, '47'],
							[Blockly.Msg.IR_R6, '6'],
							[Blockly.Msg.IR_L7, '13'],
							[Blockly.Msg.IR_R7, '14'],
							[Blockly.Msg.IR_L8, '20'],
							[Blockly.Msg.IR_R8, '19']
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
							[Blockly.Msg.portsAD1, '1'],
							[Blockly.Msg.portsAD2, '15'],
							[Blockly.Msg.portsAD3, '12'],
							[Blockly.Msg.portsAD4, '7'],
							[Blockly.Msg.portsAD5, '11'],
							[Blockly.Msg.portsAD6, '6'],
							[Blockly.Msg.portsAD7, '14'],
							[Blockly.Msg.portsAD8, '19']
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
							[Blockly.Msg.portsAD1, '1'],
							[Blockly.Msg.portsAD2, '15'],
							[Blockly.Msg.portsAD3, '12'],
							[Blockly.Msg.portsAD4, '7'],
							[Blockly.Msg.portsAD5, '11'],
							[Blockly.Msg.portsAD6, '6'],
							[Blockly.Msg.portsAD7, '14'],
							[Blockly.Msg.portsAD8, '19']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
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
							[Blockly.Msg.portsAD1, '1'],
							[Blockly.Msg.portsAD2, '15'],
							[Blockly.Msg.portsAD3, '12'],
							[Blockly.Msg.portsAD4, '7'],
							[Blockly.Msg.portsAD5, '11'],
							[Blockly.Msg.portsAD6, '6'],
							[Blockly.Msg.portsAD7, '14'],
							[Blockly.Msg.portsAD8, '19']
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
                            [Blockly.Msg.PO1, '10'],
                            [Blockly.Msg.PO2, '16'],
                            [Blockly.Msg.PO3, '21'],
                            [Blockly.Msg.PO4, '48'],
                            [Blockly.Msg.PO5, '36'],
                            [Blockly.Msg.PO6, '47'],
                            [Blockly.Msg.PO7, '13'],
                            [Blockly.Msg.PO8, '20']
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
                            [Blockly.Msg.PO1, '10'],
                            [Blockly.Msg.PO2, '16'],
                            [Blockly.Msg.PO3, '21'],
                            [Blockly.Msg.PO4, '48'],
                            [Blockly.Msg.PO5, '36'],
                            [Blockly.Msg.PO6, '47'],
                            [Blockly.Msg.PO7, '13'],
                            [Blockly.Msg.PO8, '20']
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
							[Blockly.Msg.tport1, '1'],
							[Blockly.Msg.tport2, '15'],
							[Blockly.Msg.tport3, '12'],
							[Blockly.Msg.tport4, '7'],
							[Blockly.Msg.tport5, '11'],
							[Blockly.Msg.tport6, '6'],
							[Blockly.Msg.tport7, '14'],
							[Blockly.Msg.tport8, '19']
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
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO5, '9'],
                            [Blockly.Msg.PO7, '3'],
                            [Blockly.Msg.PO8, '4']
                        ]
                    },
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
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO5, '9'],
                            [Blockly.Msg.PO7, '3'],
                            [Blockly.Msg.PO8, '4']
                        ]
                    },
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
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO5, '9'],
                            [Blockly.Msg.PO7, '3'],
                            [Blockly.Msg.PO8, '4']
                        ]
                    },
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
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            [Blockly.Msg.PO5, '9'],
                            [Blockly.Msg.PO7, '3'],
                            [Blockly.Msg.PO8, '4']
                        ]
                    }
                ],
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
                            [Blockly.Msg.PO5, '9'],
                            [Blockly.Msg.PO7, '3'],
                            [Blockly.Msg.PO8, '4']
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

	
    return Blockly;
}

exports = addBlocks;
