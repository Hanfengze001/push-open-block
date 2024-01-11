/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        OUTPUT_MOTOR: 'Set %1 direction %2 speed（0~255）%3',
        OUTPUT_MOTOR2: 'Set %1 direction %2',
        OUTPUT_MOTOR_M1: 'M1',
        OUTPUT_MOTOR_M2: 'M2',
        OUTPUT_MOTOR_M3: 'M3',
        OUTPUT_MOTOR_M4: 'M4',
        OUTPUT_MOTOR_M6: 'M6',
		OUTPUT_MOTOR_foreward:  'foreward',
		OUTPUT_MOTOR_reversal:  'reversal',
		OUTPUT_MOTOR_stop:  'stop',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        OUTPUT_MOTOR: '设置 %1 方向 %2 速度（0~255）%3',
        OUTPUT_MOTOR2: '设置 %1 方向 %2',
        OUTPUT_MOTOR_M1: '电机1',
        OUTPUT_MOTOR_M2: '电机2',
        OUTPUT_MOTOR_M3: '电机3',
        OUTPUT_MOTOR_M4: '电机4',
        OUTPUT_MOTOR_M6: '电机6',
		OUTPUT_MOTOR_foreward:  '正转',
		OUTPUT_MOTOR_reversal:  '反转',
		OUTPUT_MOTOR_stop:  '停止',
    });
    return Blockly;
}

exports = addMsg;
