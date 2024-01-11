/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AICAM_CATEGORY: 'AI',
        AICAM_INIT: 'Initialize AI color tracking',
		ASR_INIT: 'Initialize speech recognition',
		ASR_CLEAR: 'Clear recognition statement',
		ASR_MODE: 'Set recognition mode %1',
		ASR_WORDS: 'Set the %1 recognition statement to %2',
		ASR_CLECK: 'Check if the input statement is %1',
		ASR_GAIN: 'Set sensitivity %1 (64-85)',
		ASR_VOICE: 'Recognition prompt tone %1 ',
		ASR_BUZZER: 'Module buzzer %1',
		ASR_RGB: 'Module red %1 green %2 blue %3 (0-255)',
		ASR_RESULT: 'Read recognition results',
		SPEECH_WORDS: 'Broadcast %1',
		ON: 'On',
		OFF: 'Off',
		MODE1: 'Loop recognition',
		MODE2: 'Password recognition',
		MODE3: 'Key recognition',
        AICAM_SCORE: 'Curling score (installation height %1 mm)',
        ASRUL_WORDS: '离线语音识别到 %1',
        AICAM_VALUE: 'Read color %1 coordinates'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AICAM_CATEGORY: 'AI',
        AICAM_INIT: '初始化AI颜色追踪',
        ASR_INIT: '初始化语音识别',
        ASR_CLEAR: '清除识别语句',
        ASR_MODE: '设置识别模式 %1',
        ASR_WORDS: '设置第 %1 条识别语句为 %2',
        ASR_CLECK: '检查录入语句是否为 %1 条',
        ASR_GAIN: '设置灵敏度 %1 (64-85)',
        ASR_VOICE: '识别提示音 %1 ',
        ASR_BUZZER: '模块蜂鸣器 %1 ',
        ASR_RGB: '模块红色 %1 绿色 %2 蓝色 %3 (0-255)',
        ASR_RESULT: '读取识别结果',
        SPEECH_WORDS: '播报 %1',
        ON: '开',
        OFF: '关',
        MODE1: '循环识别',
        MODE2: '口令识别',
        MODE3: '按键识别',
        AICAM_SCORE: '冰壶位置(安装高度 %1 mm)',
        ASRUL_WORDS: '离线语音识别到 %1',
        AICAM_VALUE: '读取颜色 %1 坐标'
    });
 
    return Blockly;
}

exports = addMsg;