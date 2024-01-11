#include "ESP32CKPS2.h"

BLEServer *pServer = NULL;
//BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
uint8_t txValue = 0;
uint8_t _rxValue[30];
uint8_t _rxValuelen;

uint8_t _serialRead;
uint8_t _dataLen;
uint8_t _index = 0;
uint8_t _prevc = 0;
uint8_t buffer[30];
uint8_t ps2_data_list[25];
uint8_t ps2_data_list_bak[25];
long _lasttime;
BLECharacteristic *pCharacteristic; // 创建一个BLE特性pCharacteristic

boolean _isStart;
boolean _isAvailable;
boolean _isReady;

uint8_t pressBtns[25];

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();

      if (rxValue.length() > 0) {
        for (int i = 0; i < rxValue.length(); i++){
          _rxValue[i] = rxValue[i];
		  //Serial.print(rxValue[i]);
		}
      }
	  _rxValuelen = rxValue.length();
      _isAvailable = true;
    }
};

ESP32CKPS2::ESP32CKPS2()
{
  _isReady = false;
  _isAvailable = false;
  _isStart = false;
  _lasttime = millis();

  ps2_data_list[MeJOYSTICK_L1] =  false;
  ps2_data_list[MeJOYSTICK_L2] =  false;
  ps2_data_list[MeJOYSTICK_R1] =  false;
  ps2_data_list[MeJOYSTICK_R2] =  false;

  ps2_data_list[MeJOYSTICK_UP] =  false;
  ps2_data_list[MeJOYSTICK_DOWN] =  false;
  ps2_data_list[MeJOYSTICK_LEFT] = false;
  ps2_data_list[MeJOYSTICK_RIGHT] = false;

  ps2_data_list[MeJOYSTICK_TRIANGLE] =  false;
  ps2_data_list[MeJOYSTICK_XSHAPED] =  false;
  ps2_data_list[MeJOYSTICK_SQUARE] =  false;
  ps2_data_list[MeJOYSTICK_ROUND] =  false;

  ps2_data_list[MeJOYSTICK_START] =  false;
  ps2_data_list[MeJOYSTICK_MODE] = false;

  ps2_data_list_bak[MeJOYSTICK_L1] = false;
  ps2_data_list_bak[MeJOYSTICK_L2] = false;
  ps2_data_list_bak[MeJOYSTICK_R1] = false;
  ps2_data_list_bak[MeJOYSTICK_R2] = false;

  ps2_data_list_bak[MeJOYSTICK_UP] = false;
  ps2_data_list_bak[MeJOYSTICK_DOWN] = false;
  ps2_data_list_bak[MeJOYSTICK_LEFT] = false;
  ps2_data_list_bak[MeJOYSTICK_RIGHT] = false;

  ps2_data_list_bak[MeJOYSTICK_TRIANGLE] = false;
  ps2_data_list_bak[MeJOYSTICK_XSHAPED] = false;
  ps2_data_list_bak[MeJOYSTICK_SQUARE] = false;
  ps2_data_list_bak[MeJOYSTICK_ROUND] = false;

  ps2_data_list_bak[MeJOYSTICK_START] = false;
  ps2_data_list_bak[MeJOYSTICK_MODE] = false;
  

  pressBtns[MeJOYSTICK_L1] = false;
  pressBtns[MeJOYSTICK_L2] = false;
  pressBtns[MeJOYSTICK_R1] = false;
  pressBtns[MeJOYSTICK_R2] = false;

  pressBtns[MeJOYSTICK_UP] = false;
  pressBtns[MeJOYSTICK_DOWN] = false;
  pressBtns[MeJOYSTICK_LEFT] = false;
  pressBtns[MeJOYSTICK_RIGHT] = false;

  pressBtns[MeJOYSTICK_TRIANGLE] = false;
  pressBtns[MeJOYSTICK_XSHAPED] = false;
  pressBtns[MeJOYSTICK_SQUARE] = false;
  pressBtns[MeJOYSTICK_ROUND] = false;

  pressBtns[MeJOYSTICK_START] = false;
  pressBtns[MeJOYSTICK_MODE] = false;
  
}

void ESP32CKPS2::CKPS2INIT(void)
{
  BLEDevice::init("2+1");
  // Create the BLE Server
    BLEServer *pServer = BLEDevice::createServer(); // 创建一个蓝牙服务器
    pServer->setCallbacks(new MyServerCallbacks()); // 服务器回调函数设置为MyServerCallbacks

    BLEService *pService = pServer->createService(SERVICE_UUID); // 创建一个BLE服务

    pCharacteristic = pService->createCharacteristic(CHARACTERISTIC_UUID_TX, BLECharacteristic::PROPERTY_NOTIFY);
    // 创建一个(读)特征值 类型是通知
    pCharacteristic->addDescriptor(new BLE2902());
    // 为特征添加一个描述

    BLECharacteristic *pCharacteristic = pService->createCharacteristic(CHARACTERISTIC_UUID_RX, BLECharacteristic::PROPERTY_WRITE);
    // 创建一个(写)特征 类型是写入
    pCharacteristic->setCallbacks(new MyCallbacks());
    // 为特征添加一个回调

    pService->start();                  // 开启服务
    // pServer->getAdvertising()->start(); // 服务器开始广播

    // Start advertising
    BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
    pAdvertising->addServiceUUID(SERVICE_UUID);
    pAdvertising->setScanResponse(false);
    pAdvertising->setMinPreferred(0);

    BLEDevice::startAdvertising();
}

uint8_t ESP32CKPS2::readBuffer(int16_t index)
{
  _index=index;
  return buffer[_index];
}

void ESP32CKPS2::writeBuffer(int16_t index,uint8_t c)
{
  _index=index;
  buffer[_index]=c;
}

void ESP32CKPS2::readBLE(void)
{
    if (deviceConnected) {
        pCharacteristic->setValue(&txValue, 1);
        pCharacteristic->notify();
        txValue++;
		delay(1); // bluetooth stack will go into congestion, if too many packets are sent
	}

    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        //Serial.println("start advertising");
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
		// do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
}

void ESP32CKPS2::readjoystick(void)
{
  //FF 55 0B 30 30 30 30 30 30 01 0C 00 05 01
	readBLE();
	if (_isAvailable) {
		if(_rxValuelen < 51){
			for (int i = 0; i < _rxValuelen; i++){
				if((_rxValue[i] & 0xff) == 0x55 && _isStart == false){
					if((_rxValue[i-1] & 0xff) == 0xff){
						_dataLen = (_rxValue[i+1] & 0xff) + 2;
						_isStart = true;
						_index = 1;
					}
				}
				if(_isStart && _dataLen){
					writeBuffer(_index, _rxValue[i] & 0xff);
					_index++;
					_dataLen--;
					//Serial.println(_rxValue[i]);
				}
				if(_isStart && _dataLen == 0){
					parseData();
					_isStart = false;
					_dataLen = false;
					_index = 0;
					//Serial.println("aa");
				}
			}
		}
		_isAvailable = false;
	}
    
}

void ESP32CKPS2::parseData(void)
{
	int btn_index = readBuffer(12);
	int state = readBuffer(13);
  
	//Serial.println(btn_index);
	switch (btn_index)
	{
	case 0x10:
		btn_index = 10;
		break;
	case 0x11:
		btn_index = 11;
		break;
	case 0x12:
		btn_index = 12;
		break;
	case 0x13:
		btn_index = 13;
		break;
	case 0x14:
		btn_index = 14;
		break;
	default:
		break;
	}


	boolean IsPress = state == 0x01 ? true : false;
	ps2_data_list[btn_index - 1] = IsPress;

	if (IsPress) {
		pressBtns[btn_index - 1] = true;
	}

}

boolean ESP32CKPS2::ButtonPressed(uint8_t button) 
{
    
    ps2_data_list_bak[button] = ps2_data_list[button];

    return  ps2_data_list[button];
  
}

boolean ESP32CKPS2::ButtonUp(uint8_t button) {

		if (pressBtns[button] && ps2_data_list_bak[button] == false) {
			pressBtns[button] = false;
			return true;
		}
	
	return false;
}

boolean ESP32CKPS2::NoButtonPress(void) {
	for (int i = 0; i < sizeof(ps2_data_list) / sizeof(int); i++)
	{
		if (ps2_data_list[i] == true) return false;
	}

	return true;
}