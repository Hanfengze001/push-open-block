/*******************
color_sen.h
*******************/

#ifndef _color_sen_H__
#define _color_sen_H__

//����Arduino����ͷ�ļ�
#include<Arduino.h> 
#include <Wire.h>              //IIC           
#define Addr 0x38
/*��ɫʶ�𴫸���*/
class color_sen
{
	private:
		void RGB_Config(void);
		unsigned int Red = 0;
		unsigned int Green  =0;
		unsigned int Blue = 0;
		unsigned int val_cData = 0;
	public:
          
		color_sen();   //���캯��         
		~color_sen();  //��������

		void color_sen_Init(int SDA, int SCL); //��ʼ������
		uint16_t get_ColorSensor(int value);//��ȡ��ɫʶ�𴫸�����⵽��ֵ
		
};

#endif