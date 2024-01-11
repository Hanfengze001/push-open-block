/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.infrared_value = function () {
        const pin = this.getFieldValue('PIN');

		Blockly.Arduino.setups_[`infrared_value_${pin}`] =
            `pinMode(${pin},INPUT);`;
		
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    Blockly.Arduino.infrared_value1 = function () {
        const pin = this.getFieldValue('PIN');

		Blockly.Arduino.setups_[`infrared_value_${pin}`] =
            `pinMode(${pin},INPUT);`;
		
        const code = `digitalRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sound_value = function (block) {
        const pin = this.getFieldValue('portsAD');

        Blockly.Arduino.setups_.sound_value = `pinMode(${pin},INPUT);`;
		
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lightsensor_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_.lightsensor_value = `pinMode(${port},INPUT);`;
		
        const code = `digitalRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    Blockly.Arduino.gray_value = function (block) {
        const pin = this.getFieldValue('portsAD');
        const ledstate = this.getFieldValue('LEDstate');
		
		if(`${pin}` == 'A1'){
			Blockly.Arduino.setups_.gray_value = `pinMode(${pin},INPUT);\n  pinMode(A0,OUTPUT);\n  digitalWrite(A0,${ledstate});`;
		}
		else if(`${pin}` == 'A2'){
			Blockly.Arduino.setups_.gray_value = `pinMode(${pin},INPUT);\n  pinMode(A3,OUTPUT);\n  digitalWrite(A3,${ledstate});`;
		}
		
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.pir_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_.pir_value = `pinMode(${port},INPUT);`;
		
        const code = `digitalRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.button_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_.button_value = `pinMode(${port},INPUT);`;
		
        const code = `digitalRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
/*
    Blockly.Arduino.ultrasonic_init = function (block) {
        const tport = block.getFieldValue('TPORT');
        const eport = block.getFieldValue('EPORT');

        Blockly.Arduino.includes_.ultrasonic_init = `#include <BitbloqUS.h>`;
        Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},${eport});`;
		
        return ``;
    };*/

    Blockly.Arduino.ultrasonic_value = function (block) {
        const tport = block.getFieldValue('TPORT');
		
        Blockly.Arduino.includes_.ultrasonic_init = `#include <BitbloqUS.h>`;
		
		if(`${tport}` == '3'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},11);`
		}
		else if(`${tport}` == '5'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},6);`
		}
		else if(`${tport}` == 'A1'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},A0);`
		}
		else if(`${tport}` == 'A2'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},A3);`
		}
		else if(`${tport}` == '7'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},8);`
		}
		else if(`${tport}` == '1'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},0);`
		}
		else if(`${tport}` == '4'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},9);`
		}
		else if(`${tport}` == '12'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},10);`
		}
		
        const code = `ultrasonidos${tport}.read()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sht_value = function () {
        const sht = this.getFieldValue('SHT');

        Blockly.Arduino.includes_.sht_value = `#include <Adafruit_SHT31.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.sht_value = `Adafruit_SHT31 sht31 = Adafruit_SHT31();`;
        Blockly.Arduino.setups_.sht_value = `sht31.begin(0x44);`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `sht31.${sht}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value = function () {
        const gyro = this.getFieldValue('GYRO');

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.gyro_value = `MPU6050 accelgyro;`;
        Blockly.Arduino.setups_.gyro_value = `Wire.begin();delay(1000);\n  accelgyro.initialize();\n  delay(1000);\n  pinMode(9,OUTPUT);digitalWrite(9,1);`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `accelgyro.a${gyro}_angle(180,0)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value2 = function () {
        const directions = this.getFieldValue('direction');

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.gyro_value = `MPU6050 accelgyro;`;
		Blockly.Arduino.definitions_.gyro_value2 = `uint8_t getGYRODirection(){\n  if(accelgyro.ax_angle(180,0) > 160)\n     return 1;\n  else if(accelgyro.ax_angle(180,0) < 20)\n    return 2;\n  else if(accelgyro.ay_angle(180,0) > 160)\n     return 3;\n  else if(accelgyro.ay_angle(180,0) < 20)\n     return 4;\n  else\n      return 0;\n}`;
		
        Blockly.Arduino.setups_.gyro_value = `Wire.begin();delay(1000);\n  accelgyro.initialize();\n  delay(1000);\n  pinMode(9,OUTPUT);digitalWrite(9,1);`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `${directions} == getGYRODirection()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value3 = function () {

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050_6Axis_MotionApps20.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.gyro_value3_1 = `MPU6050 mpu;`;
		Blockly.Arduino.definitions_.gyro_value3_2 = `bool dmpReady = false;\nuint8_t devStatus;\nuint16_t packetSize;\nuint8_t fifoBuffer[64];\nQuaternion q;\nVectorFloat gravity;\nfloat ypr[3];\nint yprdata(){\n    if (!dmpReady) return;\n    if (mpu.dmpGetCurrentFIFOPacket(fifoBuffer)) {\n        mpu.dmpGetQuaternion(&q, fifoBuffer);\n        mpu.dmpGetGravity(&gravity, &q);\n        mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);\n        return ypr[0] * 180/M_PI;\n    }\n}`;
		
        Blockly.Arduino.setups_.gyro_value3 = `   Wire.begin();\n    Wire.setClock(400000);\n    mpu.initialize();\n    pinMode(2, INPUT);\n    devStatus = mpu.dmpInitialize();\n    mpu.setXGyroOffset(220);\n    mpu.setYGyroOffset(76);\n    mpu.setZGyroOffset(-85);\n    mpu.setZAccelOffset(1788); \n    if (devStatus == 0) {\n        mpu.CalibrateAccel(6);\n        mpu.CalibrateGyro(6);\n        mpu.PrintActiveOffsets();\n        mpu.setDMPEnabled(true);\n        dmpReady = true;\n        packetSize = mpu.dmpGetFIFOPacketSize();\n    }`;
		
        const code = `yprdata()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value = function () {
        const color = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.color_value = `#include <MeColorSensor.h>\n#include <MeMCore.h>`;
		Blockly.Arduino.definitions_.color_value = `MeColorSensor colorsensor_1(1);`;
        Blockly.Arduino.definitions_.color_value2 = `uint8_t detectedColor(MeColorSensor colorSensor,uint8_t colorType)\n{\nif(colorType==colorSensor.Returnresult())\n{\nreturn 1;\n}\nreturn 0;\n}\n`;
        Blockly.Arduino.setups_.color_value = `colorsensor_1.SensorInit();\nSerial.begin(9600);`;
        Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';
		
        const code = `detectedColor(colorsensor_1,${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value2 = function () {
        const color = this.getFieldValue('COLOR');
        const port = this.getFieldValue('PORT');
		if(`${port}` == '1'){
			Blockly.Arduino.includes_.color_value2_1 = `#include <color_sen.h>`;
			Blockly.Arduino.definitions_.color_value2_1 = `color_sen color;`;
			Blockly.Arduino.definitions_.color_value2_11 = `uint16_t get_ColorSensor1(int value)\n{\n  return color.get_ColorSensor(value);\n}`;
			Blockly.Arduino.setups_.color_value2_1 = `pinMode(4,OUTPUT);digitalWrite(4,1);\ncolor.color_sen_Init();`;
			
		}
		if(`${port}` == '2'){
			Blockly.Arduino.includes_.color_value2_2 = `#define SDA_PORT PORTB\n#define SDA_PIN 5\n#define SCL_PORT PORTD\n#define SCL_PIN 2\n#define I2C_TIMEOUT 100\n#include <SoftWire.h>\n#include <avr/io.h>`;
			Blockly.Arduino.definitions_.color_value2_2 = `SoftWire SWire = SoftWire();\nuint16_t val_RS = 0;\nuint16_t val_GS = 0;\nuint16_t val_BS = 0;\nuint16_t val_cDataS = 0;\n#define Addr 0x38`;
			Blockly.Arduino.definitions_.color_value2_21 = `uint16_t get_ColorSensor2(int value)\n{\n    unsigned int data[8];\n    uint16_t return_data;\n    for(int i = 0; i < 8; i++)\n    {\n        SWire.beginTransmission(Addr);\n        SWire.write((80+i));\n        SWire.endTransmission();\n        SWire.requestFrom(Addr, 1);\n        if(SWire.available() == 1)\n        {\n            data[i] = SWire.read();\n        }\n        delay(10);\n    }\n  val_RS = ((data[1] & 0xFF) * 256) + (data[0] & 0xFF);\n  val_GS = ((data[3] & 0xFF) * 256) + (data[2] & 0xFF);\n  val_BS = ((data[5] & 0xFF) * 256) + (data[4] & 0xFF);\n  val_cDataS = ((data[7] & 0xFF) * 256) + (data[6] & 0xFF);\n  if(value == 0)\n    return_data = val_RS;\n  else if(value == 1)\n    return_data = val_GS;\n  else if(value == 2)\n    return_data = val_BS;\n  return return_data;\n  \n}  `;
			Blockly.Arduino.setups_.color_value2_2 = `  pinMode(12,OUTPUT);digitalWrite(12,1);\n  SWire.beginTransmission(Addr);\n  SWire.write(0x41);\n  SWire.write(0x00);\n  SWire.endTransmission();\n  SWire.beginTransmission(Addr);\n  SWire.write(0x42);\n  SWire.write(0x90);\n  SWire.endTransmission();\n  SWire.beginTransmission(Addr);\n  SWire.write(0x44);\n  SWire.write(0x02);\n  SWire.endTransmission();`;
			
		}
		
		const code = `get_ColorSensor${port}(${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value3 = function () {
        const color = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.color_value = `#include <MeColorSensor.h>\n#include <MeMCore.h>`;
		Blockly.Arduino.definitions_.color_value = `MeColorSensor colorsensor_1(1);`;
        Blockly.Arduino.definitions_.color_value1 = `uint16_t getSingleColorValue(MeColorSensor colorSensor,uint8_t colorType)\n{\n  long rgbcode = 0;\n  colorSensor.ColorDataRead();\n  if(colorType < 3)\n  {\n     rgbcode = colorSensor.ReturnColorCode();\n     switch(colorType)\n     {\n        case 0: return (uint8_t)(rgbcode>>16);\n        case 1: return (uint8_t)(rgbcode>>8);\n        case 2: return (uint8_t)rgbcode;\n        default: return 0;\n     }\n  }\n  else if(colorType==3)\n  {\n      return colorSensor.ReturnGrayscale();\n  }\n  else\n  {\n      return 0;\n  }\n}\n`;
        Blockly.Arduino.setups_.color_value = `colorsensor_1.SensorInit();\nSerial.begin(9600);`;
        Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';
		
        const code = `getSingleColorValue(colorsensor_1,${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gesture_value = function () {
        const gestures = this.getFieldValue('gesture');

        Blockly.Arduino.includes_.gesture_value = `#include "Gesture.h"\n#include <Wire.h>`;
		
        Blockly.Arduino.setups_.gesture_value = `GestureInit();`;
		
        const code = `Gestureread(${gestures})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
