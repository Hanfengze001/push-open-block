/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00B0FF';
    const secondaryColour = '#0075AA';

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
    return Blockly;
}

exports = addBlocks;
