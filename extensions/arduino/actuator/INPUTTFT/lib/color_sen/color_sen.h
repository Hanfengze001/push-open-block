/*******************
color_sen.h
*******************/

#ifndef _color_sen_H__
#define _color_sen_H__

//导入Arduino核心头文件
#include<Arduino.h> 
#include <Wire.h>              //IIC           
#define Addr 0x38
/*颜色识别传感器*/
class color_sen
{
	private:
		void RGB_Config(void);
		unsigned int Red = 0;
		unsigned int Green  =0;
		unsigned int Blue = 0;
		unsigned int val_cData = 0;
	public:
          
		color_sen();   //构造函数         
		~color_sen();  //析构函数

		void color_sen_Init(int SDA, int SCL); //初始化函数
		uint16_t get_ColorSensor(int value);//获取颜色识别传感器检测到的值
		
};

#endif