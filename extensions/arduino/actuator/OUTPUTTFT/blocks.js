/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const secondaryColour = '#FF4F00';
    const colorwifi = '#fc411c';
    const secondaryColourwifi = '#fc211c';

    const note = [
		['C2', '65'],
		['D2', '73'],
		['E2', '82'],
		['F2', '87'],
		['G2', '98'],
		['A2', '110'],
		['B2', '123'],
		['C3', '131'],
		['D3', '147'],
		['E3', '165'],
		['F3', '175'],
		['G3', '196'],
		['A3', '220'],
		['B3', '247'],
		['C4', '262'],
		['D4', '294'],
		['E4', '330'],
		['F4', '349'],
		['G4', '392'],
		['A4', '440'],
		['B4', '494'],
		['C5', '523'],
		['D5', '587'],
		['E5', '659'],
		['F5', '698'],
		['G5', '784'],
		['A5', '880'],
		['B5', '988'],
		['C6', '1047'],
		['D6', '1175'],
		['E6', '1319'],
		['F6', '1397'],
		['G6', '1568'],
		['A6', '1760'],
		['B6', '1976'],
		['C7', '2093'],
		['D7', '2349'],
		['E7', '2637'],
		['F7', '2794'],
		['G7', '3136'],
		['A7', '3520'],
		['B7', '3951'],
		['C8', '4186'],
		['D8', '4699']
    ];

    Blockly.Blocks.outputtft_motor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'Pos',
                        options: [
							[Blockly.Msg.OUTPUTTFT_MOTOR_M1, '1'],
							[Blockly.Msg.OUTPUTTFT_MOTOR_M2, '2'],
							[Blockly.Msg.OUTPUTTFT_MOTOR_M3, '3'],
							[Blockly.Msg.OUTPUTTFT_MOTOR_M4, '4'],
							[Blockly.Msg.OUTPUTTFT_MOTOR_M6, '6']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Direction',
                        options: [
							[Blockly.Msg.OUTPUTTFT_MOTOR_foreward, '1'],
							[Blockly.Msg.OUTPUTTFT_MOTOR_reversal, '2']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.outputtft_led = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_LED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'digiPinLED',
                        options: [
                            [Blockly.Msg.D5R, '11'],
                            [Blockly.Msg.D5Y, '36'],
                            [Blockly.Msg.D5G, '8'],
                            [Blockly.Msg.D7R, '14'],
                            [Blockly.Msg.D7Y, '13'],
                            [Blockly.Msg.D7G, '2'],
                            [Blockly.Msg.D8R, '20'],
                            [Blockly.Msg.D8Y, '19'],
                            [Blockly.Msg.D8G, '5']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'onoff',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.outputtft_led2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_LED2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'digiPinLED',
                        options: [
                            [Blockly.Msg.D5R2, '11'],
                            [Blockly.Msg.D5Y2, '36'],
                            [Blockly.Msg.D5G2, '8'],
                            [Blockly.Msg.D7R2, '14'],
                            [Blockly.Msg.D7Y2, '13'],
                            [Blockly.Msg.D7G2, '2'],
                            [Blockly.Msg.D8R2, '19'],
                            [Blockly.Msg.D8Y2, '20'],
                            [Blockly.Msg.D8G2, '5']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'onoff',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_buzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_BUZZER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '10'],
                            [Blockly.Msg.PO2, '16'],
                            [Blockly.Msg.PO3, '21'],
                            [Blockly.Msg.PO4, '48'],
                            [Blockly.Msg.PO5, '36'],
                            [Blockly.Msg.PO6, '47'],
                            [Blockly.Msg.PO7, '13'],
                            [Blockly.Msg.PO8, '20']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'onoff',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_buzzer2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_BUZZER2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '10'],
                            [Blockly.Msg.PO2, '16'],
                            [Blockly.Msg.PO3, '21'],
                            [Blockly.Msg.PO4, '48'],
                            [Blockly.Msg.PO5, '36'],
                            [Blockly.Msg.PO6, '47'],
                            [Blockly.Msg.PO7, '13'],
                            [Blockly.Msg.PO8, '20']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'hz',
                        options: note
                    },
                    {
                        type: 'field_dropdown',
                        name: 'times',
                        options: [
                            [Blockly.Msg.Half, '500'],
                            [Blockly.Msg.Quarter, '250'],
                            [Blockly.Msg.Eighth, '125'],
                            [Blockly.Msg.Whole, '1000'],
                            [Blockly.Msg.Double, '2000'],
                            [Blockly.Msg.Zero, '0']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_servo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_SERVO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '10'],
                            [Blockly.Msg.PO2, '16'],
                            [Blockly.Msg.PO3, '21'],
                            [Blockly.Msg.PO4, '48'],
                            [Blockly.Msg.PO5, '36'],
                            [Blockly.Msg.PO6, '47'],
                            [Blockly.Msg.PO7, '13'],
                            [Blockly.Msg.PO8, '20']]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_servo2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_SERVO2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '10'],
                            [Blockly.Msg.PO2, '16'],
                            [Blockly.Msg.PO3, '21'],
                            [Blockly.Msg.PO4, '48'],
                            [Blockly.Msg.PO5, '36'],
                            [Blockly.Msg.PO6, '47'],
                            [Blockly.Msg.PO7, '13'],
                            [Blockly.Msg.PO8, '20']]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_smile = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_SMILE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'smile',
                        options: [
                            [Blockly.Msg.aixin1, '1'],
                            [Blockly.Msg.dui, '2'],
                            [Blockly.Msg.cuo, '3'],
                            [Blockly.Msg.xiaolian, '4'],
                            [Blockly.Msg.kulian, '5'],
                            [Blockly.Msg.wubiaoqing, '6'],
                            [Blockly.Msg.jingya, '7'],
                            [Blockly.Msg.shangxin, '8'],
                            [Blockly.Msg.tushetou, '9'],
                            [Blockly.Msg.jiandao, '10'],
                            [Blockly.Msg.shitou, '11'],
                            [Blockly.Msg.bu, '12']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_string = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_STRING,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DISSTR'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.OUTPUTTFT_string2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_STRING2,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DISSTR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_makedis = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_MAKEDIS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '1'],
                            [Blockly.Msg.PO2, '2'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '4'],
                            [Blockly.Msg.PO5, '5'],
                            [Blockly.Msg.PO6, '6'],
                            [Blockly.Msg.PO7, '7'],
                            [Blockly.Msg.PO8, '8']]
                    },
                    {
                        type: 'input_value',
                        name: 'DISNUM'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.OUTPUTTFT_makedis2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUTTFT_MAKEDIS2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ports',
                        options: [
                            [Blockly.Msg.PO1, '1'],
                            [Blockly.Msg.PO2, '2'],
                            [Blockly.Msg.PO3, '3'],
                            [Blockly.Msg.PO4, '4'],
                            [Blockly.Msg.PO5, '5'],
                            [Blockly.Msg.PO6, '6'],
                            [Blockly.Msg.PO7, '7'],
                            [Blockly.Msg.PO8, '8']]
                    },
                    {
                        type: 'input_value',
                        name: 'DISNUM1'
                    },
                    {
                        type: 'input_value',
                        name: 'DISNUM2'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TFT_setwifi = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TFT_SETWIFI,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DISSTR1'
                    },
                    {
                        type: 'input_value',
                        name: 'DISSTR2'
                    }
                ],
                colour: colorwifi,
                secondaryColour: secondaryColourwifi,
                extensions: ['shape_statement']
            });
        }
    };
	
    Blockly.Blocks.TFT_usewifi = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TFT_USEWIFI,
                colour: colorwifi,
                secondaryColour: secondaryColourwifi,
                extensions: ['shape_statement']
            });
        }
    };
	
    return Blockly;
}

exports = addBlocks;
