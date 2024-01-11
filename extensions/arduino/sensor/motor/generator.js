/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.output_motor = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const direction = block.getFieldValue('Direction');
        const pos = block.getFieldValue('Pos');

        Blockly.Arduino.includes_.output_motor = `#include <MotorCtr.h>`;
        Blockly.Arduino.definitions_.output_motor = `MotorCtr MotorCtr;`;
        Blockly.Arduino.definitions_.output_motortemp = `int motstop = 0;\nint pos_1 = 0;\nint pos_2 = 0;\nint pos_3 = 0;\nint pos_4 = 0;\nint pos_6 = 0;\nint time_a6key = 0;`;
        Blockly.Arduino.loops_[`output_motor_${pos}`] = `pos_${pos} = 1;`;

        return `MotorCtr.RunMotor(${pos},${direction},${speed},motstop);\n`;
    };
	
    Blockly.Arduino.output_motor2 = function (block) {
        const direction = block.getFieldValue('Direction');
        const pos = block.getFieldValue('Pos');

        Blockly.Arduino.includes_.output_motor = `#include <MotorCtr.h>`;
        Blockly.Arduino.definitions_.output_motor = `MotorCtr MotorCtr;`;
        Blockly.Arduino.definitions_.output_motortemp = `int motstop = 0;\nint pos_1 = 0;\nint pos_2 = 0;\nint pos_3 = 0;\nint pos_4 = 0;\nint pos_6 = 0;\nint time_a6key = 0;`;
        Blockly.Arduino.loops_[`output_motor_${pos}`] = `pos_${pos} = 1;`;

        return `MotorCtr.RunMotor(${pos},${direction},0,motstop);\n`;
    };

    return Blockly;
}

exports = addGenerator;
