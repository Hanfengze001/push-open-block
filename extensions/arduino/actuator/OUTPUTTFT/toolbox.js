/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_OUTPUTTFT_CATEGORY}" id="OUTPUTTFT_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="outputtft_motor" id="outputtft_motor">
        <field name="Pos">1</field>
        <field name="Direction">1</field>
        <value name="SPEED">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="outputtft_led" id="outputtft_led">
        <field name="digiPinLED">11</field>
        <field name="onoff">1</field>
    </block>
    <block type="outputtft_led2" id="outputtft_led2">
        <field name="digiPinLED">11</field>
        <field name="onoff">1</field>
    </block>
    <block type="OUTPUTTFT_buzzer" id="OUTPUTTFT_buzzer">
        <field name="ports">10</field>
        <field name="onoff">1</field>
    </block>
    <block type="OUTPUTTFT_buzzer2" id="OUTPUTTFT_buzzer2">
        <field name="ports">10</field>
        <field name="hz">65</field>
        <field name="times">0</field>
    </block>
    <block type="OUTPUTTFT_servo" id="OUTPUTTFT_servo">
        <field name="ports">10</field>
        <value name="VALUE">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="OUTPUTTFT_servo2" id="OUTPUTTFT_servo2">
        <field name="ports">10</field>
        <value name="VALUE">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="OUTPUTTFT_smile" id="OUTPUTTFT_smile">
        <field name="smile">1</field>
    </block>
    <block type="OUTPUTTFT_string" id="OUTPUTTFT_string">
        <value name="DISSTR">
            <shadow type="text">
                <field name="TEXT">hello world</field>
            </shadow>
        </value>
    </block>
    <block type="OUTPUTTFT_string2" id="OUTPUTTFT_string2">
        <value name="DISSTR">
            <shadow type="text">
                <field name="TEXT">hello world</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="OUTPUTTFT_makedis" id="OUTPUTTFT_makedis">
        <field name="ports">1</field>
        <value name="DISNUM">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="OUTPUTTFT_makedis2" id="OUTPUTTFT_makedis">
        <field name="ports">1</field>
        <value name="DISNUM1">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="DISNUM2">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="TFT_setwifi" id="TFT_setwifi">
        <value name="DISSTR1">
            <shadow type="text">
                <field name="TEXT">ssid</field>
            </shadow>
        </value>
        <value name="DISSTR2">
            <shadow type="text">
                <field name="TEXT">password</field>
            </shadow>
        </value>
    </block>
    <block type="TFT_usewifi" id="TFT_usewifi">
    </block>
</category>`;
}

exports = addToolbox;
