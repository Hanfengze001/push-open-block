


#include "MotorCtrTFT.h"


MotorCtrTFT::MotorCtrTFT()
{
	ledcSetup(0, 490, 8);
	ledcAttachPin(1, 0);
	ledcSetup(1, 490, 8);
	ledcAttachPin(15, 1);
	ledcSetup(2, 490, 8);
	ledcAttachPin(12, 2);
	ledcSetup(3, 490, 8);
	ledcAttachPin(7, 3);
	ledcSetup(5, 490, 8);
	ledcAttachPin(6, 5);
	pinMode(10, OUTPUT);
	pinMode(16, OUTPUT);
	pinMode(21, OUTPUT);
	pinMode(47, OUTPUT);
	pinMode(48, OUTPUT);
}
//ledcWrite(0, 255);//IO1 通道0
uint8_t pin1 = 0;
uint8_t pin2 = 0;
uint8_t pin3 = 0;
uint8_t pin4 = 0;
uint8_t pin6 = 0;


void MotorCtrTFT::RunMotorTFT(int16_t pin, int16_t turn, int16_t pwm, int motstop)
{
    
    if (motstop == 1) { 
		pwm = 0; 
        turn = 0;
	
	}
	if (prePin == pin && preDir == turn && prePwm == pwm) { 
			
		//Serial.println("不执行");
		return; 
	
	}
	else {
		prePin = pin;
		preDir = turn;
		prePwm = pwm;
		//Serial.println("执行");
		switch (pin)
		{
			case 0:   //全部停止

				ledcWrite(0, 0);
				digitalWrite(10, 0);
				ledcWrite(1, 0);
				digitalWrite(16, 0);
				ledcWrite(2, 0);
				digitalWrite(21, 0);
				ledcWrite(3, 0);
				digitalWrite(48, 0);
				ledcWrite(5, 0);
				digitalWrite(47, 0);

				break;
			case 1:
				//ledcSetup(0, 490, 8);
				//ledcAttachPin(1, 0);
				//pinMode(10, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(0, pwm);
					digitalWrite(10, 0);
				}
				else if (turn == 2)
				{
					ledcWrite(0, 255-pwm);
					digitalWrite(10, 1);
				}
				else if (turn == 0) {
					ledcWrite(0, 0);
					digitalWrite(10, 0);
				};

				break;
			case 2: 
				//ledcSetup(1, 490, 8);
				//ledcAttachPin(15, 1);
				//pinMode(16, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(1, pwm);
					digitalWrite(16, 0);

				}
				else if (turn == 2)
				{
					ledcWrite(1, 255-pwm);
					digitalWrite(16, 1);
				}
				else if (turn == 0) {
					ledcWrite(1, 0);
					digitalWrite(16, 0);
				};
				break;
			case 3:
				//ledcSetup(2, 490, 8);
				//ledcAttachPin(12, 2);
				//pinMode(21, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(2, pwm);
					digitalWrite(21, 0);
				}
				else if (turn == 2)
				{
					ledcWrite(2, 255-pwm);
					digitalWrite(21, 1);
				}
				else if (turn == 0) {
					ledcWrite(2, 0);
					digitalWrite(21, 0);
				};
				break;
			case 4:
				//ledcSetup(3, 490, 8);
				//ledcAttachPin(7, 3);
				//pinMode(48, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(3, pwm);
					digitalWrite(48, 0);

				}
				else if (turn == 2)
				{
					ledcWrite(3, 255-pwm);
					digitalWrite(48, 1);
				}
				else if (turn == 0) {
					ledcWrite(3, 0);
					digitalWrite(48, 0);
				};
				break;
			case 6:
				//ledcSetup(5, 490, 8);
				//ledcAttachPin(6, 5);
				//pinMode(47, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(5, pwm);
					digitalWrite(47, 0);
				}
				else if (turn == 2)
				{
					ledcWrite(5, 255-pwm);
					digitalWrite(47, 1);
				}
				else if (turn == 0) {
					ledcWrite(5, 0);
					digitalWrite(47, 0);
				};
				break;
/*			case 7:
				pinMode(4, OUTPUT);
				// pinMode(5, OUTPUT); //设置端口输出方式
				if (turn == 2)
				{
					digitalWrite(4, 0);
					digitalWrite(5, 1);
				}
				else if (turn == 1)
				{
					digitalWrite(4, 1);
					digitalWrite(5, 0);
				}
				else if (turn == 0) {
					digitalWrite(4, 0);
					digitalWrite(5, 0);
				};
				break;

			case 8:
				pinMode(12, OUTPUT);
				//pinMode(13, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(12, 0);
					digitalWrite(13, 1);
				}
				else if (turn == 2)
				{
					digitalWrite(12, 1);
					digitalWrite(13, 0);
				}
				else if (turn == 0) {
					digitalWrite(12, 0);
					digitalWrite(13, 0);
				};
				break;*/
		}

	}

}

	
void MotorCtrTFT::RunMotorTFT(int16_t pin, int16_t turn, int16_t pwm)
{
	//if(pin == 0)  pin0=1;
	if(pin == 1)  pin1=1;
	if(pin == 2)  pin2=1;
	if(pin == 3)  pin3=1;
	if(pin == 4)  pin4=1;
	if(pin == 6)  pin6=1;
	if (prePin == pin && preDir == turn && prePwm == pwm) { 
			
		//Serial.println("不执行");
		return; 
	
	}
	else {
		prePin = pin;
		preDir = turn;
		prePwm = pwm;
		//Serial.println("执行");
		switch (pin)
		{
			case 0:   //全部停止

				ledcWrite(0, 0);
				digitalWrite(10, 0);
				ledcWrite(1, 0);
				digitalWrite(16, 0);
				ledcWrite(2, 0);
				digitalWrite(21, 0);
				ledcWrite(3, 0);
				digitalWrite(48, 0);
				ledcWrite(5, 0);
				digitalWrite(47, 0);

				break;
			case 1:
				ledcSetup(0, 490, 8);
				ledcAttachPin(1, 0);
				pinMode(10, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(0, pwm);
					digitalWrite(10, 0);
				}
				else if (turn == 2)
				{
					ledcWrite(0, 255-pwm);
					digitalWrite(10, 1);
				}
				else if (turn == 0) {
					ledcWrite(0, 0);
					digitalWrite(10, 0);
				};

				break;
			case 2: 
				ledcSetup(1, 490, 8);
				ledcAttachPin(15, 1);
				pinMode(16, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(1, pwm);
					digitalWrite(16, 0);

				}
				else if (turn == 2)
				{
					ledcWrite(1, 255-pwm);
					digitalWrite(16, 1);
				}
				else if (turn == 0) {
					ledcWrite(1, 0);
					digitalWrite(16, 0);
				};
				break;
			case 3:
				ledcSetup(2, 490, 8);
				ledcAttachPin(12, 2);
				pinMode(21, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(2, pwm);
					digitalWrite(21, 0);
				}
				else if (turn == 2)
				{
					ledcWrite(2, 255-pwm);
					digitalWrite(21, 1);
				}
				else if (turn == 0) {
					ledcWrite(2, 0);
					digitalWrite(21, 0);
				};
				break;
			case 4:
				ledcSetup(3, 490, 8);
				ledcAttachPin(7, 3);
				pinMode(48, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(3, pwm);
					digitalWrite(48, 0);

				}
				else if (turn == 2)
				{
					ledcWrite(3, 255-pwm);
					digitalWrite(48, 1);
				}
				else if (turn == 0) {
					ledcWrite(3, 0);
					digitalWrite(48, 0);
				};
				break;
			case 6:
				ledcSetup(5, 490, 8);
				ledcAttachPin(6, 5);
				pinMode(47, OUTPUT);
				if (turn == 1)
				{
					ledcWrite(5, pwm);
					digitalWrite(47, 0);
				}
				else if (turn == 2)
				{
					ledcWrite(5, 255-pwm);
					digitalWrite(47, 1);
				}
				else if (turn == 0) {
					ledcWrite(5, 0);
					digitalWrite(47, 0);
				};
				break;
		}

	}

}
