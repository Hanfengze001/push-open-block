/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.outputtft_motor = function (block) {
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const direction = block.getFieldValue('Direction');
        const pos = block.getFieldValue('Pos');

        Blockly.Arduino.includes_.output_motor = `#include <MotorCtrTFT.h>`;
        Blockly.Arduino.definitions_.output_motor = `MotorCtrTFT MotorCtrTFT;`;
		Blockly.Arduino.definitions_.output_motortemp = `int motstop = 0;\nint pos_1 = 0;\nint pos_2 = 0;\nint pos_3 = 0;\nint pos_4 = 0;\nint pos_6 = 0;\nint time_a6key = 0;`;
        Blockly.Arduino.loops_[`output_motor_${pos}`] = `pos_${pos} = 1;`;

        return `MotorCtrTFT.RunMotorTFT(${pos},${direction},${speed},motstop);\n`;
    };
	

    Blockly.Arduino.outputtft_led = function (block) {
        const digiPinLED = block.getFieldValue('digiPinLED');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`outputtft_led_${digiPinLED}`] =
            `pinMode(${digiPinLED},OUTPUT);`;
		
        return `digitalWrite(${digiPinLED},${onoff});\n`;
    };
	

    Blockly.Arduino.outputtft_led2 = function (block) {
        const digiPinLED = block.getFieldValue('digiPinLED');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`outputtft_led_${digiPinLED}`] =
            `pinMode(${digiPinLED},OUTPUT);`;
		
        return `digitalWrite(${digiPinLED},${onoff});\n`;
    };
	
    Blockly.Arduino.OUTPUTTFT_buzzer = function (block) {
        const ports = block.getFieldValue('ports');
        const onoff = block.getFieldValue('onoff');

		Blockly.Arduino.setups_[`OUTPUTTFT_buzzer_${ports}`] =
            `pinMode(${ports},OUTPUT);`;
			
        return `digitalWrite(${ports},${onoff});\n`;
    };
	
    Blockly.Arduino.OUTPUTTFT_buzzer2 = function (block) {
        const ports = block.getFieldValue('ports');
        const hz = block.getFieldValue('hz');
        const times = block.getFieldValue('times');
        Blockly.Arduino.includes_.OUTPUTTFT_buzzer2 = `#include <ESP32Tone.h>`;
		Blockly.Arduino.setups_[`OUTPUTTFT_buzzer2_${ports}`] = `pinMode(${ports},OUTPUT);`;
		
		if(ports == '10'){
			return `tone(${ports},${hz},${times},0);\n`;
		}
		else if(ports == '16'){
			return `tone(${ports},${hz},${times},1);\n`;
		}
		else if(ports == '21'){
			return `tone(${ports},${hz},${times},2);\n`;
		}
		else if(ports == '48'){
			return `tone(${ports},${hz},${times},3);\n`;
		}
		else if(ports == '36'){
			return `tone(${ports},${hz},${times},4);\n`;
		}
		else if(ports == '47'){
			return `tone(${ports},${hz},${times},5);\n`;
		}
		else if(ports == '13'){
			return `tone(${ports},${hz},${times},6);\n`;
		}
		else if(ports == '20'){
			return `tone(${ports},${hz},${times},7);\n`;
		}
    };

    Blockly.Arduino.OUTPUTTFT_servo = function (block) {
        const ports = block.getFieldValue('ports');
        const VALUE = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

		if(ports == '10') chal = 0;
		else if(ports == '16') chal = 0;
		else if(ports == '21') chal = 1;
		else if(ports == '48') chal = 1;
		else if(ports == '36') chal = 2;
		else if(ports == '47') chal = 2;
		else if(ports == '13') chal = 3;
		else if(ports == '20') chal = 3;
		
        Blockly.Arduino.includes_.OUTPUTTFT_servo = `#include <ESP32Servo.h>`;
		
		Blockly.Arduino.definitions_[`OUTPUTTFT_servo_${ports}`] =
            `Servo servo_${ports};`;
		
		Blockly.Arduino.setups_[`OUTPUTTFT_servo_${ports}`] =
            `ESP32PWM::allocateTimer(${chal});\n  servo_${ports}.setPeriodHertz(50);\n  servo_${ports}.attach(${ports}, 500, 2500);`;
		
        return `servo_${ports}.write(${VALUE});\n`;
    };

    Blockly.Arduino.OUTPUTTFT_servo2 = function (block) {
        const ports = block.getFieldValue('ports');
        const VALUE = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

		if(ports == '10') chal = 0;
		else if(ports == '16') chal = 0;
		else if(ports == '21') chal = 1;
		else if(ports == '48') chal = 1;
		else if(ports == '36') chal = 2;
		else if(ports == '47') chal = 2;
		else if(ports == '13') chal = 3;
		else if(ports == '20') chal = 3;
		
        Blockly.Arduino.includes_.OUTPUTTFT_servo = `#include <ESP32Servo.h>`;
		
		Blockly.Arduino.definitions_[`OUTPUTTFT_servo_${ports}`] =
            `Servo servo_${ports};`;
		
		Blockly.Arduino.setups_[`OUTPUTTFT_servo_${ports}`] =
            `ESP32PWM::allocateTimer(${chal});\n  servo_${ports}.setPeriodHertz(50);\n  servo_${ports}.attach(${ports}, 500, 2500);`;
		
        return `servo_${ports}.write(map(${VALUE}, 0, 270, 0, 180));\n`;
    };

    Blockly.Arduino.OUTPUTTFT_string = function (block) {
        //const DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_ATOMIC);
		var DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
		var DISSTR = DISSTR.slice(1, -1);

		Blockly.Arduino.setups_.Tft_Start = `Serial1.begin(9600, SERIAL_8N1, 18, 17);`;
		
        return 'Serial1.print("$#' + DISSTR + '&");\n';
    };

    Blockly.Arduino.OUTPUTTFT_string2 = function (block) {
        //const DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_ATOMIC);
		var DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
		var DISSTR = DISSTR.slice(1, -1);
		var VALUE = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';

		Blockly.Arduino.setups_.Tft_Start = `Serial1.begin(9600, SERIAL_8N1, 18, 17);`;
		
        return 'Serial1.print("$#' + DISSTR + '" + String(' + VALUE + ') + "&");\n';
    };

    Blockly.Arduino.OUTPUTTFT_smile = function (block) {
        const smile = block.getFieldValue('smile');
			
		Blockly.Arduino.definitions_.definitions_OUTPUTTFT_smile2 = `void writeSerial(unsigned char c){\n  Serial1.write(c);\n}`;
		Blockly.Arduino.definitions_.definitions_OUTPUTTFT_smile3 = `void smile(unsigned char c){\n  writeSerial(0xFF);\n  writeSerial(0xEE);\n  writeSerial(0x06);\n  writeSerial(c);\n  writeSerial(0x01);\n  writeSerial(0x00);\n  writeSerial(0x00);\n  writeSerial(0x00);\n  writeSerial(0x00);\n}`;

		Blockly.Arduino.setups_.Tft_Start = `Serial1.begin(9600, SERIAL_8N1, 18, 17);`;
		
        return `smile(${smile});\n`;
    };
	
    Blockly.Arduino.OUTPUTTFT_makedis = function (block) {
        const ports = block.getFieldValue('ports');
        const DISNUM = Blockly.Arduino.valueToCode(block, 'DISNUM', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.OUTPUTTFT_makedis = `#include <Me7SegmentDisplay.h>`;
		
		if(ports == '1'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(1,10);`;
		}
		else if(ports == '2'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(15,16);`;
		}
		else if(ports == '3'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(12,21);`;
		}
		else if(ports == '4'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(7,48);`;
		}
		else if(ports == '5'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(11,36);`;
		}
		else if(ports == '6'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(6,47);`;
		}
		else if(ports == '7'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(14,13);`;
		}
		else if(ports == '8'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(19,20);`;
		}
		
        return `seg7_${ports}.display(${DISNUM});\n`;
    };
	
    Blockly.Arduino.OUTPUTTFT_makedis2 = function (block) {
        const ports = block.getFieldValue('ports');
        const DISNUM1 = Blockly.Arduino.valueToCode(block, 'DISNUM1', Blockly.Arduino.ORDER_ATOMIC);
        const DISNUM2 = Blockly.Arduino.valueToCode(block, 'DISNUM2', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.OUTPUTTFT_makedis = `#include <Me7SegmentDisplay.h>`;
		
		if(ports == '1'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(1,10);`;
		}
		else if(ports == '2'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(15,16);`;
		}
		else if(ports == '3'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(12,21);`;
		}
		else if(ports == '4'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(7,48);`;
		}
		else if(ports == '5'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(11,36);`;
		}
		else if(ports == '6'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(6,47);`;
		}
		else if(ports == '7'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(14,13);`;
		}
		else if(ports == '8'){
			Blockly.Arduino.definitions_[`OUTPUTTFT_makedis_${ports}`] = `Me7SegmentDisplay seg7_${ports}(19,20);`;
		}
		
        return `seg7_${ports}.displaytime(int(${DISNUM1}),int(${DISNUM2}));\n`;
    };	
	
    Blockly.Arduino.TFT_setwifi = function (block) {
		var DISSTR1 = Blockly.Arduino.valueToCode(block, 'DISSTR1', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
		var DISSTR1 = DISSTR1.replace(/\"/g, '');
		var DISSTR2 = Blockly.Arduino.valueToCode(block, 'DISSTR2', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
		var DISSTR2 = DISSTR2.replace(/\"/g, '');
		
        Blockly.Arduino.includes_.tft_wifi = `#include <WiFi.h>\n#include <ESPmDNS.h>\n#include <WiFiUdp.h>\n#include <ArduinoOTA.h>\n#include <EEPROM.h>\n`;
        Blockly.Arduino.definitions_.tft_setwifi = `String ssids1 = "${DISSTR1}";\nString passwords1 = "${DISSTR2}";\nString e_flag1="M";`;
        Blockly.Arduino.definitions_.tft_setwifi2 = `void set_string(int a,int b,String str,int s)\n{\n  if(s)EEPROM.write(a,str.length());\n  for(int i = 0; i < str.length(); i++){\n    EEPROM.write(b + i, str[i]);\n  }\n  EEPROM.commit();\n}\n`;
        Blockly.Arduino.setups_.tft_wifi = `EEPROM.begin(1024);`;
        Blockly.Arduino.setups_.tft_setwifi = `set_string(10,15,ssids1,1);\n  set_string(50,55,passwords1,1);\n  set_string(1,0,e_flag1,0);`;
        //Blockly.Arduino.loops_.tft_wifi = `#include <MotorCtrTFT.h>`;
		
		
		
        //return `${DISSTR1},${DISSTR2};\n`;
        return `\n`;
    };	
	
    Blockly.Arduino.TFT_usewifi = function (block) {
		
        Blockly.Arduino.includes_.tft_wifi = `#include <WiFi.h>\n#include <ESPmDNS.h>\n#include <WiFiUdp.h>\n#include <ArduinoOTA.h>\n#include <EEPROM.h>\n`;
		
        Blockly.Arduino.setups_.tft_wifi = `EEPROM.begin(1024);`;
        Blockly.Arduino.definitions_.tft_usewifi = `String ssids = "";\nString passwords = "";\nString e_flag="M";`;
        Blockly.Arduino.definitions_.tft_usewifi2 = `String get_string(int a,int b){\n  String data="";\n  for(int i=0; i<a; i++){\n    data += char(EEPROM.read(b+i));\n  }\n  return data;\n}\n`;
		
		Blockly.Arduino.setups_.setups_OUTPUTTFT_smile = `Serial1.begin(9600, SERIAL_8N1, 18, 17);`;
        Blockly.Arduino.setups_.tft_usewifi = `  WiFi.mode(WIFI_STA);\n  if(get_string(1,0) == e_flag){\n    if(EEPROM.read(10)) ssids=get_string(EEPROM.read(10),15);\n    if(EEPROM.read(50)) passwords=get_string(EEPROM.read(50),55);\n  }\n  WiFi.begin(ssids.c_str(), passwords.c_str());\n  delay(1000);\n  while (WiFi.waitForConnectResult() != WL_CONNECTED) {\n    WiFi.begin(ssids.c_str(), passwords.c_str());\n    delay(1);\n  }\n  ArduinoOTA\n    .onStart([]() {\n      String type;\n      if (ArduinoOTA.getCommand() == U_FLASH)\n        type = "sketch";\n      else\n        type = "filesystem";\n      Serial.println("Start updating " + type);\n    })\n    .onEnd([]() {\n      Serial.println("\\nEnd");\n    })\n    .onProgress([](unsigned int progress, unsigned int total) {\n      Serial.printf("Progress: %u%%\\r", (progress / (total / 100)));\n    })\n    .onError([](ota_error_t error) {\n      Serial.printf("Error[%u]: ", error);\n      if (error == OTA_AUTH_ERROR) Serial.println("Auth Failed");\n      else if (error == OTA_BEGIN_ERROR) Serial.println("Begin Failed");\n      else if (error == OTA_CONNECT_ERROR) Serial.println("Connect Failed");\n      else if (error == OTA_RECEIVE_ERROR) Serial.println("Receive Failed");\n      else if (error == OTA_END_ERROR) Serial.println("End Failed");\n    });\n\n  ArduinoOTA.begin();\n  Serial1.print("~#");\n  Serial1.print(WiFi.localIP());\n  Serial1.print("&");\n  motstop = 0;`;
        Blockly.Arduino.loops_.tft_usewifi = `ArduinoOTA.handle();`;
		
		
        return `\n`;
    };	
    return Blockly;
}

exports = addGenerator;
