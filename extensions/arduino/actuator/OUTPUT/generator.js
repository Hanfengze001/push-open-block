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

    Blockly.Arduino.output_led = function (block) {
        const digiPinLED = block.getFieldValue('digiPinLED');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`output_led_${digiPinLED}`] =
            `pinMode(${digiPinLED},OUTPUT);`;
		
        return `digitalWrite(${digiPinLED},${onoff});\n`;
    };
	

    Blockly.Arduino.output_led2 = function (block) {
        const digiPinLED = block.getFieldValue('digiPinLED');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`output_led_${digiPinLED}`] =
            `pinMode(${digiPinLED},OUTPUT);`;
		
        return `digitalWrite(${digiPinLED},${onoff});\n`;
    };
	
    Blockly.Arduino.OUTPUT_buzzer = function (block) {
        const ports = block.getFieldValue('ports');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`OUTPUT_buzzer_${ports}`] =
            `pinMode(${ports},OUTPUT);`;
			
        return `digitalWrite(${ports},${onoff});\n`;
    };
	
    Blockly.Arduino.OUTPUT_buzzer2 = function (block) {
        const ports = block.getFieldValue('ports');
        const hz = block.getFieldValue('hz');
        const times = block.getFieldValue('times');

		Blockly.Arduino.setups_[`OUTPUT_buzzer2_${ports}`] =
            `pinMode(${ports},OUTPUT);`;

		
        return `tone(${ports},${hz},${times});\ndelay(${times});\n`;
    };

    Blockly.Arduino.OUTPUT_servo = function (block) {
        const ports = block.getFieldValue('ports');
        const VALUE = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.OUTPUT_servo = `#include <Servo.h>`;
		
		Blockly.Arduino.definitions_[`OUTPUT_servo_${ports}`] =
            `Servo servo_${ports};`;
		
		Blockly.Arduino.setups_[`OUTPUT_servo_${ports}`] =
            `servo_${ports}.attach(${ports});`;
		
        return `servo_${ports}.write(${VALUE});\n`;
    };

    Blockly.Arduino.OUTPUT_servo2 = function (block) {
        const ports = block.getFieldValue('ports');
        const VALUE = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.OUTPUT_servo = `#include <Servo.h>`;
		
		Blockly.Arduino.definitions_[`OUTPUT_servo_${ports}`] =
            `Servo servo_${ports};`;
		
		Blockly.Arduino.setups_[`OUTPUT_servo_${ports}`] =
            `servo_${ports}.attach(${ports});`;
		
        return `servo_${ports}.write(map(${VALUE},0,270,0,180));\n`;
    };

    Blockly.Arduino.OUTPUT_string = function (block) {
        //const DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_ATOMIC);
		var DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
		var DISSTR = DISSTR.replace(/\"/g, '');
        Blockly.Arduino.includes_.OUTPUT_string = `#include <SoftwareSerial.h>`;
		
		Blockly.Arduino.definitions_.definitions_OUTPUT_smile =`SoftwareSerial serial(8, 7);`;

		Blockly.Arduino.setups_.setups_OUTPUT_smile = `serial.begin(9600);`;
		
        return 'serial.print("$#' + DISSTR + '&");\n';
    };

    Blockly.Arduino.OUTPUT_smile = function (block) {
        const smile = block.getFieldValue('smile');
		
        Blockly.Arduino.includes_.OUTPUT_smile = `#include <SoftwareSerial.h>`;
		
		Blockly.Arduino.definitions_.definitions_OUTPUT_smile =`SoftwareSerial serial(8, 7);`;
			
		Blockly.Arduino.definitions_.definitions_OUTPUT_smile2 = `void writeSerial(unsigned char c){\n  serial.write(c);\n}`;
		Blockly.Arduino.definitions_.definitions_OUTPUT_smile3 = `void smile(unsigned char c){\n  writeSerial(0xFF);\n  writeSerial(0xEE);\n  writeSerial(0x06);\n  writeSerial(c);\n  writeSerial(0x01);\n  writeSerial(0x00);\n  writeSerial(0x00);\n  writeSerial(0x00);\n  writeSerial(0x00);\n}`;

		Blockly.Arduino.setups_.setups_OUTPUT_smile = `serial.begin(9600);`;
		
        return `smile(${smile});\n`;
    };
	
    Blockly.Arduino.OUTPUT_makedis2 = function (block) {
        const ports = block.getFieldValue('ports');
        const DISNUM1 = Blockly.Arduino.valueToCode(block, 'DISNUM1', Blockly.Arduino.ORDER_ATOMIC);
        const DISNUM2 = Blockly.Arduino.valueToCode(block, 'DISNUM2', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.OUTPUT_makedis = `#include <Me7SegmentDisplay.h>`;
		
		if(ports == '1'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(3,11);`;
		}
		else if(ports == '2'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(5,6);`;
		}
		else if(ports == '3'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(15,14);`;
		}
		else if(ports == '4'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(16,17);`;
		}
		else if(ports == '5'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(7,8);`;
		}
		else if(ports == '6'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(1,0);`;
		}
		else if(ports == '7'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(4,9);`;
		}
		else if(ports == '8'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(12,10);`;
		}
		
        return `seg7_${ports}.displaytime(int(${DISNUM1}),int(${DISNUM2}));\n`;
    };	
		
    Blockly.Arduino.OUTPUT_makedis = function (block) {
        const ports = block.getFieldValue('ports');
        const DISNUM = Blockly.Arduino.valueToCode(block, 'DISNUM', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.OUTPUT_makedis = `#include <Me7SegmentDisplay.h>`;
		
		if(ports == '1'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(3,11);`;
		}
		else if(ports == '2'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(5,6);`;
		}
		else if(ports == '3'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(15,14);`;
		}
		else if(ports == '4'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(16,17);`;
		}
		else if(ports == '5'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(7,8);`;
		}
		else if(ports == '6'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(1,0);`;
		}
		else if(ports == '7'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(4,9);`;
		}
		else if(ports == '8'){
			Blockly.Arduino.definitions_[`OUTPUT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(12,10);`;
		}
		
        return `seg7_${ports}.display(int(${DISNUM}));\n`;
    };
	
    return Blockly;
}

exports = addGenerator;
