/*****************
color_sen.cpp
******************/

#include"color_sen.h"

uint16_t val_R = 0;
uint16_t val_G = 0;
uint16_t val_B = 0;
uint16_t val_cData = 0;

/*********************************************************************/
/*颜色识别传感器*/
/******************************************************************/
//参考OMIBOX
color_sen::color_sen()
{
		
}
color_sen::~color_sen()
{
		
}
void color_sen::RGB_Config()
{
	uint8_t W_ADDR;

    // Start I2C Transmission
    Wire.beginTransmission(Addr);
    // Select mode control register1
    Wire.write(0x41);
    // Set RGBC measurement time 160 msec
    Wire.write(0x00);
    // Stop I2C Transmission
    Wire.endTransmission();
    
    // Start I2C Transmission
    Wire.beginTransmission(Addr);
    // Select mode control register2
    Wire.write(0x42);
    // Set measurement mode is active, gain = 1x
    Wire.write(0x90);
    // Stop I2C Transmission
    Wire.endTransmission();
    
    // Start I2C Transmission
    Wire.beginTransmission(Addr);
    // Select mode control register3
    Wire.write(0x44);
    // Set default value
    Wire.write(0x02);
    // Stop I2C Transmission
    Wire.endTransmission();
	delay(300);
}

void color_sen::color_sen_Init(int SDA, int SCL)
{

	Wire.begin(SDA, SCL);
  	RGB_Config();
}

//输出颜色识别传感器检测到的值
uint16_t color_sen::get_ColorSensor(int value)
{
    unsigned int data[8];
    uint16_t return_data;
    for(int i = 0; i < 8; i++)
    {
        // Start I2C Transmission
        Wire.beginTransmission(Addr);
        // Select data register
        Wire.write((80+i));
        // Stop I2C Transmission
        Wire.endTransmission();
        
        // Request 1 byte of data from the device
        Wire.requestFrom(Addr, 1);
        
        // Read 8 bytes of data
        // Red lsb, Red msb, Green lsb, Green msb, Blue lsb, Blue msb
        // cData lsb, cData msb
        if(Wire.available() == 1)
        {
            data[i] = Wire.read();
        }
        delay(10);
    }
	val_R = ((data[1] & 0xFF) * 256) + (data[0] & 0xFF);
	val_G = ((data[3] & 0xFF) * 256) + (data[2] & 0xFF);
	val_B = ((data[5] & 0xFF) * 256) + (data[4] & 0xFF);
	val_cData = ((data[7] & 0xFF) * 256) + (data[6] & 0xFF);
	
	if(value == 0)
		return_data = val_R;
	else if(value == 1)
		return_data = val_G;
	else if(value == 2)
		return_data = val_B;
	return return_data;
  
}  
