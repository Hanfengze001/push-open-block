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
	
    return Blockly;
}

exports = addGenerator;
