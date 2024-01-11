/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_AICAM_CATEGORY}" id="AICAM_CATEGORY" colour="#00B0FF" secondaryColour="#0075AA">
    <block type="aicam_init" id="aicam_init">
    </block>
    <block type="aicam_value" id="aicam_value">
		<field name="aicloXY">x</field>
    </block>
    <block type="aicam_score" id="aicam_score">
        <value name="SCORE">
            <shadow type="math_whole_number">
                <field name="NUM">858</field>
            </shadow>
        </value>
    </block>
    ${'<sep gap="36"/>'}
    <block type="asr_init" id="asr_init">
    </block>
    <block type="asr_clear" id="asr_clear">
    </block>
    <block type="asr_mode" id="asr_mode">
		<field name="MODE">1</field>
    </block>
    <block type="asr_words" id="asr_words">
        <value name="DISNUM">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="DISSTR">
            <shadow type="text">
                <field name="TEXT">ni hao</field>
            </shadow>
        </value>
    </block>
    <block type="asr_cleck" id="asr_cleck">
        <value name="DISNUM">
            <shadow type="math_whole_number">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>
    <block type="asr_gain" id="asr_gain">
        <value name="DISNUM">
            <shadow type="math_whole_number">
                <field name="NUM">64</field>
            </shadow>
        </value>
    </block>
    <block type="asr_voice" id="asr_mode">
		<field name="ONOF">1</field>
    </block>
    <block type="asr_buzzer" id="asr_mode">
		<field name="ONOF">1</field>
    </block>
    <block type="asr_rgb" id="asr_rgb">
        <value name="RNUM">
            <shadow type="math_whole_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="GNUM">
            <shadow type="math_whole_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="BNUM">
            <shadow type="math_whole_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="asr_result" id="asr_result">
    </block>
    ${'<sep gap="36"/>'}
    <block type="speech_words" id="speech_words">
        <value name="DISSTR">
            <shadow type="text">
                <field name="TEXT">你好</field>
            </shadow>
        </value>
    </block>
    ${'<sep gap="36"/>'}
    <block type="asrul_words" id="asrul_words">
		<field name="asrdata">2</field>
    </block>
</category>`;
}

exports = addToolbox;
