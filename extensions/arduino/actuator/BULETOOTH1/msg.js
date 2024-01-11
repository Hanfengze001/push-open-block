/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BULETOOTH1_CATEGORY: 'BULETOOTH1 REMOTE',
        BULETOOTH1_BUTTON: 'The Bluetooth handle key %1 is pressed',
        BULETOOTH1_TRACK: 'Press the Bluetooth handle key %1 and release it',
        BULETOOTH1_Start: 'Start',
        BULETOOTH1_INFRARED: 'No button was pressed'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BULETOOTH1_CATEGORY: '蓝牙遥控',
        BULETOOTH1_BUTTON: '蓝牙手柄 按键 %1 被按下',
        BULETOOTH1_TRACK: '蓝牙手柄 按键 %1 按下后松开',
        BULETOOTH1_Start: '开始',
        BULETOOTH1_INFRARED: '没有按钮被按下'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
		BULETOOTH1_CATEGORY: '블루투스 리모컨',
		BULETOOTH1_BUTTON: '블루투스 핸들 버튼 %1이(가) 눌려졌습니다',
		BULETOOTH1_TRACK: '블루투스 핸들 버튼 %1을 눌렀다가 떼세요',
		BULETOOTH1_Start: '시작',
		BULETOOTH1_INFRARED: '버튼을 누르지 않았습니다.'
    });
    return Blockly;
}

exports = addMsg;
