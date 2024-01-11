/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AICAM_CATEGORY: 'AI',
        AICAM_INIT: 'Initialize AI color tracking',
        AICAM_SCORE: 'Curling score (installation height% 1 mm)',
        AICAM_VALUE: 'Read color %1 coordinates'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AICAM_CATEGORY: 'AI',
        AICAM_INIT: '初始化AI颜色追踪',
        AICAM_SCORE: '冰壶位置(安装高度 %1 mm)',
        AICAM_VALUE: '读取颜色 %1 坐标'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
		AICAM_CATEGORY: 'AI',
		AICAM_INIT: 'AI 색상 추적 초기화',
        AICAM_SCORE: '컬링 점수(설치 높이 %1 mm)',
        AICAM_VALUE: '색상 %1 좌표 읽기'
    });
    return Blockly;
}

exports = addMsg;