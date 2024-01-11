/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
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
    return Blockly;
}

exports = addGenerator;
