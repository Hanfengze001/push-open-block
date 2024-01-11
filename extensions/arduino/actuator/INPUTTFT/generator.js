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

        Blockly.Arduino.setups_[`sound_value${pin}`] = `pinMode(${pin},INPUT);`;
		
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.lightsensor_value = function () {
        const port = this.getFieldValue('PORT');
		
		if(`${port}` == '19'){
			Blockly.Arduino.setups_[`lightsensor_value2${port}`] = `pinMode(20,OUTPUT);\n  digitalWrite(20,0);`;
		}
		
        Blockly.Arduino.setups_[`lightsensor_value2${port}`] = `pinMode(${port},INPUT);`;
		
        const code = `analogRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    Blockly.Arduino.gray_value = function (block) {
        const pin = this.getFieldValue('portsAD');
        const ledstate = this.getFieldValue('LEDstate');
		
		if(`${pin}` == '1'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(10,OUTPUT);\n  digitalWrite(10,${ledstate});`;
		}
		else if(`${pin}` == '15'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(16,OUTPUT);\n  digitalWrite(16,${ledstate});`;
		}
		else if(`${pin}` == '12'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(21,OUTPUT);\n  digitalWrite(21,${ledstate});`;
		}
		else if(`${pin}` == '7'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(48,OUTPUT);\n  digitalWrite(48,${ledstate});`;
		}
		else if(`${pin}` == '11'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(36,OUTPUT);\n  digitalWrite(36,${ledstate});`;
		}
		else if(`${pin}` == '6'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(47,OUTPUT);\n  digitalWrite(47,${ledstate});`;
		}
		else if(`${pin}` == '14'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(13,OUTPUT);\n  digitalWrite(13,${ledstate});`;
		}
		else if(`${pin}` == '19'){
			Blockly.Arduino.setups_[`gray_value${pin}`] = `pinMode(${pin},INPUT);\n  pinMode(20,OUTPUT);\n  digitalWrite(20,${ledstate});`;
		}
		
        const code = `analogRead(${pin})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.pir_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_[`pir_value${port}`] = `pinMode(${port},INPUT);`;
		
        const code = `digitalRead(${port})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.button_value = function () {
        const port = this.getFieldValue('PORT');

        Blockly.Arduino.setups_[`button_value${port}`] = `pinMode(${port},INPUT);`;
		
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
		
		if(`${tport}` == '1'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},10);`
		}
		else if(`${tport}` == '15'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},16);`
		}
		else if(`${tport}` == '12'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},21);`
		}
		else if(`${tport}` == '7'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},48);`
		}
		else if(`${tport}` == '11'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},36);`
		}
		else if(`${tport}` == '6'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},47);`
		}
		else if(`${tport}` == '14'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},13);`
		}
		else if(`${tport}` == '19'){
			Blockly.Arduino.definitions_[`ultrasonic_init_${tport}`] = `US ultrasonidos${tport}(${tport},20);`
		}
		
        const code = `ultrasonidos${tport}.read()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sht_value = function () {
        const sht = this.getFieldValue('SHT');
        const port = this.getFieldValue('PORT');
		if(`${port}` == '9'){
			Blockly.Arduino.definitions_.sht_value = `Adafruit_SHT31 sht31 = Adafruit_SHT31(9,8);`;
		}
		else if(`${port}` == '3'){
			Blockly.Arduino.definitions_.sht_value = `Adafruit_SHT31 sht31 = Adafruit_SHT31(3,2);`;
		}
		else if(`${port}` == '4'){
			Blockly.Arduino.definitions_.sht_value = `Adafruit_SHT31 sht31 = Adafruit_SHT31(4,5);`;
		}
			

        Blockly.Arduino.includes_.sht_value = `#include <Adafruit_SHT31.h>\n#include <Wire.h>`;
        Blockly.Arduino.setups_.sht_value = `sht31.begin(0x44);`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `sht31.${sht}()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value = function () {
        const gyro = this.getFieldValue('GYRO');
        const port = this.getFieldValue('PORT');
		if(`${port}` == '9'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(9,8);`;
		}
		else if(`${port}` == '3'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(3,2);`;
		}
		else if(`${port}` == '4'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(4,5);`;
		}
			

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.gyro_value = `MPU6050 accelgyro;`;
        Blockly.Arduino.setups_.gyro_value = `delay(1000);\n  accelgyro.initialize();\n  delay(1000);\n  pinMode(36,OUTPUT);digitalWrite(36,1);`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `accelgyro.a${gyro}_angle(180,0)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value2 = function () {
        const directions = this.getFieldValue('direction');
        const port = this.getFieldValue('PORT');
		if(`${port}` == '9'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(9,8);`;
		}
		else if(`${port}` == '3'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(3,2);`;
		}
		else if(`${port}` == '4'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(4,5);`;
		}

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.gyro_value = `MPU6050 accelgyro;`;
		Blockly.Arduino.definitions_.gyro_value2 = `uint8_t getGYRODirection(){\n  if(accelgyro.ax_angle(180,0) > 160)\n     return 1;\n  else if(accelgyro.ax_angle(180,0) < 20)\n    return 2;\n  else if(accelgyro.ay_angle(180,0) > 160)\n     return 3;\n  else if(accelgyro.ay_angle(180,0) < 20)\n     return 4;\n  else\n      return 0;\n}`;
		
        Blockly.Arduino.setups_.gyro_value = `delay(1000);\n  accelgyro.initialize();\n  delay(1000);\n  pinMode(9,OUTPUT);digitalWrite(9,1);`;
        /*Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';*/
		
        const code = `${directions} == getGYRODirection()`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.gyro_value3 = function () {
        const port = this.getFieldValue('PORT');
		if(`${port}` == '9'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(9,8);`;
		}
		else if(`${port}` == '3'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(3,2);`;
		}
		else if(`${port}` == '4'){
			Blockly.Arduino.setups_.gyro_value1 = `Wire.begin(4,5);`;
		}

        Blockly.Arduino.includes_.gyro_value = `#include <MPU6050_6Axis_MotionApps20.h>\n#include <Wire.h>\n#include <I2Cdev.h>`;
		Blockly.Arduino.definitions_.gyro_value3_1 = `MPU6050 mpu;`;
		Blockly.Arduino.definitions_.gyro_value3_2 = `bool dmpReady = false;\nuint8_t mpuIntStatus;\nuint8_t devStatus;\nuint16_t packetSize;\nuint8_t fifoBuffer[64];\nQuaternion q;\nVectorFloat gravity; \nfloat ypr[3]; \nuint16_t yawtime = 0;\nint inityaw = 0;\nint yprdata(){\n    if (!dmpReady) return 0;\n    if (mpu.dmpGetCurrentFIFOPacket(fifoBuffer)) {\n        mpu.dmpGetQuaternion(&q, fifoBuffer);\n        mpu.dmpGetGravity(&gravity, &q);\n        mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);\n        return ypr[0] * 180/M_PI;\n    }\n}`;
		
        Blockly.Arduino.setups_.gyro_value3 = `    Wire.setClock(400000);\n    mpu.initialize();\n    devStatus = mpu.dmpInitialize();\n    yawtime = 0;\n    mpu.setXGyroOffset(220);\n    mpu.setYGyroOffset(76);\n    mpu.setZGyroOffset(-85);\n    mpu.setZAccelOffset(1788);\n    if (devStatus == 0) {\n        mpu.setDMPEnabled(true);\n        mpuIntStatus = mpu.getIntStatus();\n        dmpReady = true;\n        packetSize = mpu.dmpGetFIFOPacketSize();\n    }\n    yawtime = millis();\n    while(yawtime + 20000 > millis()){\n      delay(1);\n      inityaw = yprdata();\n    }`;
		
        const code = `yprdata()-inityaw`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value = function () {
        const color = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.color_value = `#include <MeColorSensor.h>\n#include <MeMCore.h>\n#include <Wire.h>`;
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
        Blockly.Arduino.includes_.color_value2 = `#include <color_sen.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.color_value2 = `color_sen color;`;
		
		if(`${port}` == '9'){
			Blockly.Arduino.setups_.color_value2 = `color.color_sen_Init(9,8);\n  pinMode(11,OUTPUT);\n  digitalWrite(11,1);`;
		}
		else if(`${port}` == '3'){
			Blockly.Arduino.setups_.color_value2 = `color.color_sen_Init(3,2);\n  pinMode(14,OUTPUT);\n  digitalWrite(14,1);`;
		}
		else if(`${port}` == '4'){
			Blockly.Arduino.setups_.color_value2 = `color.color_sen_Init(4,5);\n  pinMode(19,OUTPUT);\n  digitalWrite(19,1);`;
		}
		
		
		const code = `color.get_ColorSensor(${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.color_value3 = function () {
        const color = this.getFieldValue('COLOR');

        Blockly.Arduino.includes_.color_value = `#include <MeColorSensor.h>\n#include <MeMCore.h>\n#include <Wire.h>`;
		Blockly.Arduino.definitions_.color_value = `MeColorSensor colorsensor_1(1);`;
        Blockly.Arduino.definitions_.color_value1 = `uint16_t getSingleColorValue(MeColorSensor colorSensor,uint8_t colorType)\n{\n  long rgbcode = 0;\n  colorSensor.ColorDataRead();\n  if(colorType < 3)\n  {\n     rgbcode = colorSensor.ReturnColorCode();\n     switch(colorType)\n     {\n        case 0: return (uint8_t)(rgbcode>>16);\n        case 1: return (uint8_t)(rgbcode>>8);\n        case 2: return (uint8_t)rgbcode;\n        default: return 0;\n     }\n  }\n  else if(colorType==3)\n  {\n      return colorSensor.ReturnGrayscale();\n  }\n  else\n  {\n      return 0;\n  }\n}\n`;
        Blockly.Arduino.setups_.color_value = `colorsensor_1.SensorInit();\nSerial.begin(9600);`;
        Blockly.Arduino.loops_.color_value = 'Serial.println("");\nSerial.println("");\nSerial.println("");';
		
        const code = `getSingleColorValue(colorsensor_1,${color})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
