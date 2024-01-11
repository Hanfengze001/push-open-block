/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_INPUT_CATEGORY}" id="INPUT_CATEGORY" colour="#B943FF" secondaryColour="#9900FF">
    <block type="infrared_value" id="infrared_value">
        <field name="PIN">10</field>
    </block>
    <block type="infrared_value1" id="infrared_value1">
        <field name="PIN">10</field>
    </block>
    <block type="sound_value" id="sound_value">
        <field name="portsAD">1</field>
    </block>
    <block type="lightsensor_value" id="lightsensor_value">
        <field name="PORT">1</field>
    </block>
    <block type="button_value" id="button_value">
        <field name="PORT">10</field>
    </block>
    <block type="gray_value" id="gray_value">
        <field name="portsAD">1</field>
        <field name="LEDstate">1</field>
    </block>
    <block type="pir_value" id="pir_value">
        <field name="PORT">10</field>
    </block>
    <block type="ultrasonic_value" id="ultrasonic_value">
        <field name="TPORT">1</field>
    </block>
    <block type="sht_value" id="sht_value">
        <field name="PORT">9</field>
        <field name="SHT">readTemperature</field>
    </block>
    <block type="gyro_value" id="gyro_value">
        <field name="PORT">9</field>
        <field name="GYRO">x</field>
    </block>
    <block type="gyro_value2" id="gyro_value2">
        <field name="PORT">9</field>
        <field name="direction">1</field>
    </block>
    <block type="gyro_value3" id="gyro_value3">
        <field name="PORT">9</field>
    </block>
    <block type="color_value2" id="color_value2">
        <field name="PORT">9</field>
        <field name="COLOR">0</field>
    </block>
</category>`;
}

exports = addToolbox;
