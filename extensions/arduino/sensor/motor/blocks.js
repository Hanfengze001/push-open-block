/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const secondaryColour = '#FF4F00';
    
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

    Blockly.Blocks.output_motor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'Pos',
                        options: [
							[Blockly.Msg.OUTPUT_MOTOR_M1, '1'],
							[Blockly.Msg.OUTPUT_MOTOR_M2, '2']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Direction',
                        options: [
							[Blockly.Msg.OUTPUT_MOTOR_foreward, '1'],
							[Blockly.Msg.OUTPUT_MOTOR_reversal, '2']
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

    Blockly.Blocks.output_motor2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.OUTPUT_MOTOR2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'Pos',
                        options: [
							[Blockly.Msg.OUTPUT_MOTOR_M3, '3'],
							[Blockly.Msg.OUTPUT_MOTOR_M4, '4'],
							[Blockly.Msg.OUTPUT_MOTOR_M6, '6']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'Direction',
                        options: [
							[Blockly.Msg.OUTPUT_MOTOR_foreward, '1'],
							[Blockly.Msg.OUTPUT_MOTOR_reversal, '2'],
							[Blockly.Msg.OUTPUT_MOTOR_stop, '0']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}
exports = addBlocks;
