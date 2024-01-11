/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.BULETOOTH_button = function () {
        const state = this.getFieldValue('STATE');
		
        Blockly.Arduino.includes_.BULETOOTH_button = '#include <ESP32CKPS2.h>';
		Blockly.Arduino.definitions_.BULETOOTH_button = 'ESP32CKPS2 ESP32BLE;';
        Blockly.Arduino.setups_.BULETOOTH_button = 'ESP32BLE.CKPS2INIT();';
        Blockly.Arduino.loops_.BULETOOTH_button = 'ESP32BLE.readjoystick();';
		
        const code = `ESP32BLE.ButtonPressed(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_track = function () {
        const state = this.getFieldValue('STATE');

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <ESP32CKPS2.h>';
		Blockly.Arduino.definitions_.BULETOOTH_button = 'ESP32CKPS2 ESP32BLE;';
        Blockly.Arduino.setups_.BULETOOTH_button = 'ESP32BLE.CKPS2INIT();';
        Blockly.Arduino.loops_.BULETOOTH_button = 'ESP32BLE.readjoystick();';
		
        const code = `ESP32BLE.ButtonUp(${state})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BULETOOTH_infrared = function () {

        Blockly.Arduino.includes_.BULETOOTH_button = '#include <ESP32CKPS2.h>';
		Blockly.Arduino.definitions_.BULETOOTH_button = 'ESP32CKPS2 ESP32BLE;';
        Blockly.Arduino.setups_.BULETOOTH_button = 'ESP32BLE.CKPS2INIT();';
        Blockly.Arduino.loops_.BULETOOTH_button = 'ESP32BLE.readjoystick();';
		
        const code = `ESP32BLE.NoButtonPress()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    return Blockly;
}

exports = addGenerator;
