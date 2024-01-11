/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.BULETOOTH_button = function () {
        const state = this.getFieldValue('STATE');
		
        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
		Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(8, 7);\nCKPS22 CKPS22(5);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.readjoystick(_isAvailable, readSerial());';
		
        const code = `CKPS22.ButtonPressed(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_button2 = function () {
        const state = this.getFieldValue('STATE');
        const port = this.getFieldValue('ports');
		
		if(`${port}` == '1')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(11, 3);\nCKPS22 CKPS22(1);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '2')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(6, 5);\nCKPS22 CKPS22(2);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '3')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(A0, A1);\nCKPS22 CKPS22(3);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '4')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(A3, A2);\nCKPS22 CKPS22(4);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '5')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(8, 7);\nCKPS22 CKPS22(5);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '7')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(9, 4);\nCKPS22 CKPS22(7);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '8')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(10, 12);\nCKPS22 CKPS22(8);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.readjoystick(_isAvailable, readSerial());';
		
        const code = `CKPS22.ButtonPressed(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_track = function () {
        const state = this.getFieldValue('STATE');

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
		Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(8, 7);\nCKPS22 CKPS22(5);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.readjoystick(_isAvailable, readSerial());';
		
        const code = `CKPS22.ButtonUp(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_track2 = function () {
        const state = this.getFieldValue('STATE');
        const port = this.getFieldValue('ports');
		
		if(`${port}` == '1')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(11, 3);\nCKPS22 CKPS22(1);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '2')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(6, 5);\nCKPS22 CKPS22(2);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '3')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(A0, A1);\nCKPS22 CKPS22(3);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '4')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(A3, A2);\nCKPS22 CKPS22(4);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '5')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(8, 7);\nCKPS22 CKPS22(5);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '7')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(9, 4);\nCKPS22 CKPS22(7);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '8')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(10, 12);\nCKPS22 CKPS22(8);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
			


        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.readjoystick(_isAvailable, readSerial());';
		
        const code = `CKPS22.ButtonUp(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.BULETOOTH_infrared = function () {

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
		Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(8, 7);\nCKPS22 CKPS22(5);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.readjoystick(_isAvailable, readSerial());';
		
        const code = `CKPS22.NoButtonPress()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_infrared2 = function () {
		
        const port = this.getFieldValue('ports');
		
		if(`${port}` == '1')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(11, 3);\nCKPS22 CKPS22(1);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '2')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(6, 5);\nCKPS22 CKPS22(2);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '3')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(A0, A1);\nCKPS22 CKPS22(3);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '4')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(A3, A2);\nCKPS22 CKPS22(4);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '5')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(8, 7);\nCKPS22 CKPS22(5);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '7')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(9, 4);\nCKPS22 CKPS22(7);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
		else if(`${port}` == '8')
			Blockly.Arduino.definitions_.BULETOOTH_button = 'SoftwareSerial serial(10, 12);\nCKPS22 CKPS22(8);\nboolean _isAvailable = false;\nuint8_t _serialRead = 0;\nunsigned char readSerial(void){\n  _isAvailable = false;\n  if( serial.available() > 0){\n    _isAvailable = true;\n    _serialRead =  serial.read();\n  }\n  return _serialRead;\n}';
        Blockly.Arduino.includes_.BULETOOTH_button = '#include <CKPS22.h>\n#include <SoftwareSerial.h>';
        Blockly.Arduino.setups_.BULETOOTH_button = 'serial.begin(9600);';
        Blockly.Arduino.loops_.BULETOOTH_button = 'CKPS22.readjoystick(_isAvailable, readSerial());';
		
        const code = `CKPS22.NoButtonPress()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
