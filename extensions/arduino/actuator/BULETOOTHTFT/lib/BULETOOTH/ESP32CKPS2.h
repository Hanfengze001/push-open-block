
#ifndef ESP32CKPS2_H
#define ESP32CKPS2_H

#include <stdbool.h>
#include <stdint.h>
#include <Arduino.h>

#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

#define SERVICE_UUID           "FFE0" // UART service UUID
#define CHARACTERISTIC_UUID_RX "FFE1"
#define CHARACTERISTIC_UUID_TX "FFE2"

#ifdef ME_PORT_DEFINED
#endif 

#define MeJOYSTICK_RX           16
#define MeJOYSTICK_RY           17
#define MeJOYSTICK_LX           14
#define MeJOYSTICK_LY           15

#define MeJOYSTICK_R1           2
#define MeJOYSTICK_R2           3
#define MeJOYSTICK_L1           0
#define MeJOYSTICK_L2           1

#define MeJOYSTICK_TRIANGLE     8
#define MeJOYSTICK_XSHAPED      10
#define MeJOYSTICK_SQUARE       11
#define MeJOYSTICK_ROUND        9


#define MeJOYSTICK_UP           4
#define MeJOYSTICK_DOWN         5
#define MeJOYSTICK_LEFT         6
#define MeJOYSTICK_RIGHT        7

#define MeJOYSTICK_START        12
#define MeJOYSTICK_MODE         13


#define MeJOYSTICK_SELECT       18
#define MeJOYSTICK_BUTTON_L     20
#define MeJOYSTICK_BUTTON_R     21
#define MeJOYSTICK_INIT_VALUE   0
#define MeJOYSTICK_ANALOG_ERROR 0


class ESP32CKPS2
{
public:


  ESP32CKPS2();
  void CKPS2INIT(void);
  
  void readBLE(void);

  uint8_t readBuffer(int16_t index);

  void writeBuffer(int16_t index,uint8_t c);

  void readjoystick(void);

  void parseData(void);

  boolean ButtonPressed(uint8_t button);

  boolean ButtonUp(uint8_t button);

  boolean NoButtonPress(void);


};
#endif
