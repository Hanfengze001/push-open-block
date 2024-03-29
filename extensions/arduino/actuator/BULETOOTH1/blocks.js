/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#5A5AAD';
    const secondaryColour = '#484891';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.BULETOOTH1_button = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH1_BUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
							['3', '10'],
							['2', '9'],
							['1', '8'],
							['4', '11'],
							['←', '6'],
							['↑', '4'],
							['→', '7'],
							['↓', '5'],
							['L1', '0'],
							['R1', '2'],
							['L2', '1'],
							['R2', '3'],
							['Mode', '13'],
							[Blockly.Msg.BULETOOTH1_Start, '12']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BULETOOTH1_track = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH1_TRACK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
							['3', '10'],
							['2', '9'],
							['1', '8'],
							['4', '11'],
							['←', '6'],
							['↑', '4'],
							['→', '7'],
							['↓', '5'],
							['L1', '0'],
							['R1', '2'],
							['L2', '1'],
							['R2', '3'],
							['Mode', '13'],
							[Blockly.Msg.BULETOOTH1_Start, '12']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BULETOOTH1_infrared = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.BULETOOTH1_INFRARED,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
