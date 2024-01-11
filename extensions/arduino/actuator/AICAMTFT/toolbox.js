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
</category>`;
}

exports = addToolbox;
