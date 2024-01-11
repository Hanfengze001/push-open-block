/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00B0FF';
    const color_asr = '#008aff';
    const color_spe = '#0078ff';
    const secondaryColour = '#0075AA';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setPwmOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.aicam_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AICAM_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.aicam_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AICAM_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'aicloXY',
                        options: [
                            ['x', 'x'],
                            ['y', 'y']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.aicam_score = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.AICAM_SCORE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SCORE'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.asr_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_INIT,
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.asr_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_CLEAR,
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.asr_mode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_MODE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.MODE1, '0'],
                            [Blockly.Msg.MODE2, '1'],
                            [Blockly.Msg.MODE3, '2']]
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.asr_words = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_WORDS,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DISNUM'
                    },
                    {
                        type: 'input_value',
                        name: 'DISSTR'
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.asr_cleck = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_CLECK,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DISNUM'
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
	

    Blockly.Blocks.asr_gain = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_GAIN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DISNUM'
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.asr_voice = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_VOICE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ONOF',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
	
    Blockly.Blocks.asr_buzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_BUZZER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ONOF',
                        options: [
                            [Blockly.Msg.ON, '1'],
                            [Blockly.Msg.OFF, '0']]
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.asr_rgb = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_RGB,
                args0: [
                    {
                        type: 'input_value',
                        name: 'RNUM'
                    },
                    {
                        type: 'input_value',
                        name: 'GNUM'
                    },
                    {
                        type: 'input_value',
                        name: 'BNUM'
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
	
    Blockly.Blocks.asr_result = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASR_RESULT,
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.speech_words = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SPEECH_WORDS,
                args0: [
                    {
                        type: 'input_value',
                        name: 'DISSTR'
                    }
                ],
                colour: color_spe,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.asrul_words = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ASRUL_WORDS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'asrdata',
                        options: [
                            ['执行程序', '2'],
                            ['执行第一个程序', '3'],
                            ['执行第二个程序', '4'],
                            ['出发', '5']]
                    }
                ],
                colour: color_asr,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
	
    return Blockly;
}

exports = addBlocks;
