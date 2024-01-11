/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.aicam_init = function (block) {

        Blockly.Arduino.includes_.aicam_init = `#include "k210_msg_deal.h"`;
        Blockly.Arduino.definitions_.aicam_init = `#define K210Serial  Serial \nmsg_k210 k210_msg ;\nchar buff_com[50];\nunsigned int k210_msg_x;\nunsigned int k210_msg_y;\n\nvoid K210colorxy(){\n  while (K210Serial.available()) \n  {\n      recv_k210msg(K210Serial.read());\n      if (k210_msg.class_n != 0)\n      {\n        if(k210_msg.class_n == 1)\n        {\n          k210_msg_x = k210_msg.x;\n          k210_msg_y = k210_msg.y;\n          k210_msg.class_n = 0;  \n        }\n      }\n  }\n}\n`;
        Blockly.Arduino.setups_.aicam_init = `K210Serial.begin(115200);`;
        Blockly.Arduino.loops_.aicam_init = `K210colorxy();`;

        return `\n`;
    };
		
//858x+y=690 240max 690
//62x+y=31 240max 31mm 
//0.8279hrel-20.3291=drelmax
//rrelmax=drelmax/2
//rrelmax/120*rxy=rbox
/*if(k210_msg_x<160) rx = 160-k210_msg_x;
else if(k210_msg_x>160) rx = k210_msg_x-160;
if(k210_msg_y<120) ry = 120-k210_msg_y;
else if(k210_msg_y>120) ry = k210_msg_y-120;
rxy = sqrt(rx*rx+ry*ry);
*/	
    Blockly.Arduino.aicam_score = function (block) {
        const score = Blockly.Arduino.valueToCode(block, 'SCORE', Blockly.Arduino.ORDER_ATOMIC);
		
        Blockly.Arduino.includes_.aicam_score = `#include <math.h>`;
        Blockly.Arduino.definitions_.aicam_score = `float drelmax;\nfloat rrelmax;\nfloat rbox;\nfloat ry;\nfloat rx;\nfloat rxy;\nfloat rboxs(unsigned int hrel){\n	if(k210_msg_x<160) rx = 160-k210_msg_x;\n	else if(k210_msg_x>160) rx = k210_msg_x-160;\n	if(k210_msg_y<120) ry = 120-k210_msg_y;\n	else if(k210_msg_y>120) ry = k210_msg_y-120;\n	rxy = sqrt(rx*rx+ry*ry);\n	drelmax = 0.8279*hrel-20.3291;\n	rrelmax = drelmax/2;\n	return rrelmax/120*rxy;\n}\n`;
        Blockly.Arduino.loops_.aicam_init = `K210colorxy();`;

		const code = `rboxs(${score})`;
		//const code = `k210_msg_${score}`;
		return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    Blockly.Arduino.aicam_value = function (block) {
		const state = this.getFieldValue('aicloXY');
		
        Blockly.Arduino.includes_.aicam_init = `#include "k210_msg_deal.h"`;
        Blockly.Arduino.definitions_.aicam_init = `#define K210Serial  Serial \nmsg_k210 k210_msg ;\nchar buff_com[50];\nunsigned int k210_msg_x;\nunsigned int k210_msg_y;\n\nvoid K210colorxy(){\n  while (K210Serial.available()) \n  {\n      recv_k210msg(K210Serial.read());\n      if (k210_msg.class_n != 0)\n      {\n        if(k210_msg.class_n == 1)\n        {\n          k210_msg_x = k210_msg.x;\n          k210_msg_y = k210_msg.y;\n          k210_msg.class_n = 0;  \n        }\n      }\n  }\n}\n`;
        Blockly.Arduino.setups_.aicam_init = `K210Serial.begin(115200);`;
        Blockly.Arduino.loops_.aicam_init = `K210colorxy();`;
		
		const code = `k210_msg_${state}`;
		return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    Blockly.Arduino.asr_init = function (block) {

        Blockly.Arduino.includes_.asr_init = `#include "ASR.h"`;
        Blockly.Arduino.setups_.asr_init = `unsigned char cleck = 0xff;\n  unsigned char asr_version = 0;\n  Wire.begin();\n  Wire.setClock(100000);\n  WireReadData(FIRMWARE_VERSION,&asr_version,1);`;

        return ``;
    };
	
    Blockly.Arduino.asr_clear = function (block) {

        return `I2CWrite(ASR_CLEAR_ADDR,0x40);\n  BusyWait();\n`;
    };
	
    Blockly.Arduino.asr_mode = function (block) {
		const mode = this.getFieldValue('MODE');

        return `I2CWrite(ASR_MODE_ADDR,${mode});\n  BusyWait();\n`;
    };
	
    Blockly.Arduino.asr_words = function (block) {
		const DISNUM = Blockly.Arduino.valueToCode(block, 'DISNUM', Blockly.Arduino.ORDER_ATOMIC);
		var DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
		var DISSTR = DISSTR.replace(/\"/g, '');

        return `AsrAddWords(${DISNUM},"${DISSTR}");\n  BusyWait();\n`;
    };
	
    Blockly.Arduino.asr_cleck = function (block) {
		const DISNUM = Blockly.Arduino.valueToCode(block, 'DISNUM', Blockly.Arduino.ORDER_ATOMIC);

        return `while(cleck != ${DISNUM}){\n    WireReadData(ASR_NUM_CLECK,&cleck,1);\n    delay(100);\n  }\n`;
    };
	
    Blockly.Arduino.asr_gain = function (block) {
		const DISNUM = Blockly.Arduino.valueToCode(block, 'DISNUM', Blockly.Arduino.ORDER_ATOMIC);

        return `I2CWrite(ASR_REC_GAIN,${DISNUM});\n`;
    };
    Blockly.Arduino.asr_voice = function (block) {
		const onof = this.getFieldValue('ONOF');

        return `I2CWrite(ASR_VOICE_FLAG,${onof});\n`;
    };
    Blockly.Arduino.asr_buzzer = function (block) {
		const onof = this.getFieldValue('ONOF');

        //Blockly.Arduino.setups_.asr_buzzer = `I2CWrite(ASR_BUZZER,${onof});`;

		return `I2CWrite(ASR_BUZZER,${onof});\n`;
    };
    Blockly.Arduino.asr_rgb = function (block) {
		const RNUM = Blockly.Arduino.valueToCode(block, 'RNUM', Blockly.Arduino.ORDER_ATOMIC);
		const GNUM = Blockly.Arduino.valueToCode(block, 'GNUM', Blockly.Arduino.ORDER_ATOMIC);
		const BNUM = Blockly.Arduino.valueToCode(block, 'BNUM', Blockly.Arduino.ORDER_ATOMIC);

        //Blockly.Arduino.setups_.asr_rgb = `RGB_Set(${RNUM},${GNUM},${BNUM});`;

		return `RGB_Set(${RNUM},${GNUM},${BNUM});\n`;
    };
	
    Blockly.Arduino.asr_result = function (block) {

        Blockly.Arduino.definitions_.asr_result = `unsigned char result;`;
        Blockly.Arduino.loops_.asr_result = `WireReadData(ASR_RESULT,&result,1);`;

		const code = `result`;
		return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    Blockly.Arduino.speech_words = function (block) {
		var DISSTR = Blockly.Arduino.valueToCode(block, 'DISSTR', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
		//var DISSTR = DISSTR.replace(/\"/g, '');

        Blockly.Arduino.includes_.speech_words = `#include <SoftwareSerial.h>`;
        Blockly.Arduino.definitions_.speech_words = `SoftwareSerial TTS_Serial(7,8);`;
        Blockly.Arduino.definitions_.speech_words2 = `\nvoid spk(unsigned char utf8str[])\n{\n	unsigned char TTS_body[100];\n	int utf8_to_unicode(unsigned char *pUTF8, unsigned char *pUNIC);\n	unsigned int TTS_length;\n	unsigned char TTS_head[5];\n	unsigned char TTS_xor = 0;\n	unsigned int i = 0;\n	TTS_length = utf8_to_unicode(utf8str, TTS_body);\n	TTS_head[0] = 0xFD;\n	TTS_head[1] = TTS_length >> 8;\n	TTS_head[2] = (TTS_length + 2) & 0xFF;\n	TTS_head[3] = 0x01;\n	TTS_head[4] = 0x04;\n	TTS_xor = 0; \n	for(i = 0; i < 5; i++)\n	{ \n		TTS_xor = TTS_xor ^ (TTS_head[i]);\n		TTS_Serial.write(TTS_head[i]);\n	} \n	for(i = 0; i < TTS_length; i++)\n	{ \n		TTS_xor = TTS_xor ^ (TTS_body[i]);\n		TTS_Serial.write(TTS_body[i]);\n	} \n	TTS_Serial.write(TTS_xor);\n	delay(500); \n}\nint utf8_to_unicode(unsigned char *pUTF8, unsigned char *pUNIC) \n{ \n	unsigned char b1, b2, b3, b4; \n	int utfbytes = 0; \n	while( *pUTF8 != '\\0') \n	{ \n		b1 = *pUTF8; \n		if( (b1 & 0x80) == 0x0)\n		{ \n			utfbytes = utfbytes + 2; \n			*pUNIC = 0x00; \n			*(pUNIC + 1) = b1; \n			pUTF8++; \n			pUNIC = pUNIC + 2; \n		} \n		else if( (b1 & 0xE0) == 0xC0)\n		{ \n			utfbytes = utfbytes + 2; \n			b1 = *pUTF8; \n			b2 = *(pUTF8 + 1); \n			if ( (b2 & 0xC0) != 0x80 ) \n			return 0; \n			*pUNIC = (b1 >> 2) & 0x07; \n			*(pUNIC + 1) = (b1 << 6) + (b2 & 0x3F); \n			pUTF8 = pUTF8 + 2; \n			pUNIC = pUNIC + 2; \n		} \n		else if( (b1 & 0xF0) == 0xE0)\n		{ \n			utfbytes = utfbytes + 2; \n			b1 = *pUTF8; \n			b2 = *(pUTF8 + 1); \n			b3 = *(pUTF8 + 2); \n			if ( ((b2 & 0xC0) != 0x80) || ((b3 & 0xC0) != 0x80) ) \n			return 0; \n			*pUNIC = (b1 << 4) + ((b2 >> 2) & 0x0F); \n			*(pUNIC + 1) = (b2 << 6) + (b3 & 0x3F); \n			pUTF8 = pUTF8 + 3; \n			pUNIC = pUNIC + 2; \n		} \n		else if( (b1 & 0xF8) == 0xF0)\n		{ \n			utfbytes = utfbytes + 3; \n			b1 = *pUTF8; \n			b2 = *(pUTF8 + 1); \n			b3 = *(pUTF8 + 2); \n			b4 = *(pUTF8 + 3); \n			if ( ((b2 & 0xC0) != 0x80) || ((b3 & 0xC0) != 0x80) || ((b4 & 0xC0) != 0x80) ) \n				return 0; \n			*pUNIC = ((b1 << 2) & 0x1C) + ((b2 >> 4) & 0x03); \n			*(pUNIC + 1) = (b2 << 4) + ((b3 >> 2) & 0x0F); \n			*(pUNIC + 2) = (b3 << 6) + (b4 & 0x3F); \n			pUTF8 = pUTF8 + 4; \n			pUNIC = pUNIC + 3; \n		} \n	} \n	*pUNIC = '\\0'; \n	return utfbytes;\n}\n`;
        Blockly.Arduino.setups_.speech_words = `TTS_Serial.begin(9600);`;

		//const code = `spk(${DISSTR});`;
		return 'spk(' + DISSTR + ');\n';
    };
	
    Blockly.Arduino.asrul_words = function (block) {
		const asrdata = this.getFieldValue('asrdata');

        Blockly.Arduino.includes_.asrul_words = '#include <SoftwareSerial.h>';
		Blockly.Arduino.definitions_.asrul_words = 'SoftwareSerial ASRUL_Serial(9, 4);\nuint8_t ASRUL_serialRead = 0;\nuint8_t ASRUL(uint8_t __ASRUL){\n  if(__ASRUL == ASRUL_serialRead){ ASRUL_serialRead = 0;return 1;}\n  else return 0;\n}';
        Blockly.Arduino.setups_.asrul_words = 'ASRUL_Serial.begin(9600);';
        Blockly.Arduino.loops_.asrul_words = '  if( ASRUL_Serial.available() > 0){\n    ASRUL_serialRead =  ASRUL_Serial.read();\n  }\n';
		
		
		const code = `ASRUL(${asrdata})`;
		return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
	
    return Blockly;
}

exports = addGenerator;
