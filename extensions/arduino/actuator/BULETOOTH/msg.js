/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BULETOOTH_CATEGORY: 'BULETOOTH REMOTE',
        BULETOOTH_BUTTON2: 'The Bluetooth handle %2 key %1 is pressed',
        BULETOOTH_BUTTON: 'The Bluetooth handle key %1 is pressed',
        BULETOOTH_TRACK: 'Press the Bluetooth handle key %1 and release it',
        BULETOOTH_TRACK2: 'Press the Bluetooth handle %2 key %1 and release it',
        BULETOOTH_Start: 'Start',
        BULETOOTH_INFRARED: 'No button was pressed',
        BULETOOTH_INFRARED2: 'Bluetooth %1 No button was pressed',
		PO1:  'port1',
		PO2:  'port2',
		PO3:  'port3',
		PO4:  'port4',
		PO6:  'port5',
		PO7:  'port7',
		PO8:  'port8'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BULETOOTH_CATEGORY: '蓝牙遥控',
        BULETOOTH_BUTTON2: '蓝牙手柄 %2 按键 %1 被按下',
        BULETOOTH_BUTTON: '蓝牙手柄 按键 %1 被按下',
        BULETOOTH_TRACK: '蓝牙手柄 按键 %1 按下后松开',
        BULETOOTH_TRACK2: '蓝牙手柄 %2 按键 %1 按下后松开',
        BULETOOTH_Start: '开始',
        BULETOOTH_INFRARED: '没有按钮被按下',
        BULETOOTH_INFRARED2: '蓝牙 %1 没有按钮被按下',
		PO1:  '端口1',
		PO2:  '端口2',
		PO3:  '端口3',
		PO4:  '端口4',
		PO6:  '端口5',
		PO7:  '端口7',
		PO8:  '端口8'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
		BULETOOTH_CATEGORY: '블루투스 리모컨',
		BULETOOTH_BUTTON2: '블루투스 핸들 %2 버튼 %1이(가) 눌려졌습니다',
		BULETOOTH_BUTTON: '블루투스 핸들 버튼 %1이(가) 눌려졌습니다',
		BULETOOTH_TRACK: '블루투스 핸들 버튼 %1을 눌렀다 떼세요',
		BULETOOTH_TRACK2: '블루투스 컨트롤러 %2의 %1 버튼을 눌렀다 떼세요',
		BULETOOTH_Start: '시작',
		BULETOOTH_INFRARED: '아무 버튼도 누르지 않았습니다',
		BULETOOTH_INFRARED2: '블루투스 %1에는 버튼이 눌러져 있지 않습니다.',
		PO1: '포트 1',
		PO2: '포트 2',
		PO3: '포트 3',
		PO4: '포트 4',
		PO6: '포트 5',
		PO7: '포트 7',
		PO8: '포트 8'
    });
    return Blockly;
}

exports = addMsg;
