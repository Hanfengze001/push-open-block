


#include "MotorCtr.h"


MotorCtr::MotorCtr()
{
}

uint8_t pin1 = 0;
uint8_t pin2 = 0;
uint8_t pin3 = 0;
uint8_t pin4 = 0;
uint8_t pin6 = 0;


void MotorCtr::RunMotor(int16_t pin, int16_t turn, int16_t pwm, int motstop)
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

				analogWrite(3, 0);
				analogWrite(11, 0);
				analogWrite(5, 0);
				analogWrite(6, 0);
				digitalWrite(A1, 0);
				digitalWrite(A0, 0);
				digitalWrite(A2, 0);
				digitalWrite(A3, 0);
				digitalWrite(0, 0);
				digitalWrite(1, 0);

				break;
			case 1:
				pinMode(3, OUTPUT);
				pinMode(11, OUTPUT);
				if (turn == 1)
				{
					analogWrite(3, pwm);
					analogWrite(11, 0);
				}
				else if (turn == 2)
				{
					analogWrite(3, 0);
					analogWrite(11, pwm);
				}
				else if (turn == 0) {
					analogWrite(3, 0);
					analogWrite(11, 0);
				};

				break;
			case 2: 
				pinMode(5, OUTPUT);
				pinMode(6, OUTPUT);
				if (turn == 1)
				{
					analogWrite(5, pwm);
					analogWrite(6, 0);

				}
				else if (turn == 2)
				{
					analogWrite(5, 0);
					analogWrite(6, pwm);
				}
				else if (turn == 0) {
					analogWrite(5, 0);
					analogWrite(6, 0);
				};
				break;
			case 3:
				pinMode(A1, OUTPUT);
				pinMode(A0, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A1, 1);
					digitalWrite(A0, 0);
				}
				else if (turn == 2)
				{
					digitalWrite(A1, 0);
					digitalWrite(A0, 1);
				}
				else if (turn == 0) {
					digitalWrite(A1, 0);
					digitalWrite(A0, 0);
				};
				break;
			case 4:
				pinMode(A2, OUTPUT);
				pinMode(A3, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A2, 1);
					digitalWrite(A3, 0);

				}
				else if (turn == 2)
				{
					digitalWrite(A2, 0);
					digitalWrite(A3, 1);
				}
				else if (turn == 0) {
					digitalWrite(A2, 0);
					digitalWrite(A3, 0);
				};
				break;
			case 6:
				pinMode(0, OUTPUT);
				pinMode(1, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(1, 1);
					digitalWrite(0, 0);
				}
				else if (turn == 2)
				{
					digitalWrite(1, 0);
					digitalWrite(0, 1);
				}
				else if (turn == 0) {
					digitalWrite(1, 0);
					digitalWrite(0, 0);
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

	
void MotorCtr::RunMotor(int16_t pin, int16_t turn, int16_t pwm)
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

				analogWrite(3, 0);
				analogWrite(11, 0);
				analogWrite(5, 0);
				analogWrite(6, 0);
				digitalWrite(A1, 0);
				digitalWrite(A0, 0);
				digitalWrite(A2, 0);
				digitalWrite(A3, 0);
				digitalWrite(0, 0);
				digitalWrite(1, 0);

				break;
			case 1:
				pinMode(3, OUTPUT);
				pinMode(11, OUTPUT);
				if (turn == 1)
				{
					analogWrite(3, pwm);
					analogWrite(11, 0);
				}
				else if (turn == 2)
				{
					analogWrite(3, 0);
					analogWrite(11, pwm);
				}
				else if (turn == 0) {
					analogWrite(3, 0);
					analogWrite(11, 0);
				};

				break;
			case 2: 
				pinMode(5, OUTPUT);
				pinMode(6, OUTPUT);
				if (turn == 1)
				{
					analogWrite(5, pwm);
					analogWrite(6, 0);

				}
				else if (turn == 2)
				{
					analogWrite(5, 0);
					analogWrite(6, pwm);
				}
				else if (turn == 0) {
					analogWrite(5, 0);
					analogWrite(6, 0);
				};
				break;
			case 3:
				pinMode(A1, OUTPUT);
				pinMode(A0, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A1, 1);
					digitalWrite(A0, 0);
				}
				else if (turn == 2)
				{
					digitalWrite(A1, 0);
					digitalWrite(A0, 1);
				}
				else if (turn == 0) {
					digitalWrite(A1, 0);
					digitalWrite(A0, 0);
				};
				break;
			case 4:
				pinMode(A2, OUTPUT);
				pinMode(A3, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(A2, 1);
					digitalWrite(A3, 0);

				}
				else if (turn == 2)
				{
					digitalWrite(A2, 0);
					digitalWrite(A3, 1);
				}
				else if (turn == 0) {
					digitalWrite(A2, 0);
					digitalWrite(A3, 0);
				};
				break;
			case 6:
				pinMode(0, OUTPUT);
				pinMode(1, OUTPUT);
				if (turn == 1)
				{
					digitalWrite(1, 1);
					digitalWrite(0, 0);
				}
				else if (turn == 2)
				{
					digitalWrite(1, 0);
					digitalWrite(0, 1);
				}
				else if (turn == 0) {
					digitalWrite(1, 0);
					digitalWrite(0, 0);
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
