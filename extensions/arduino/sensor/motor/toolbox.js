/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="电机模块" id="OUTPUT_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF">
 <block type="output_motor" id="output_motor">
    <field name="Pos">1</field>
    <field name="Direction">1</field>
    <value name="SPEED">
        <shadow type="math_whole_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="output_motor2" id="output_motor2">
    <field name="Pos">3</field>
    <field name="Direction">1</field>
</block>
</category>`;
}

exports = addToolbox;
