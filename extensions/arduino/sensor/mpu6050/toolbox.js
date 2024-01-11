/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="陀螺仪" id="MPU6050_CATEGORY" colour="#0066CC" secondaryColour="#005AB5">
<block type="gyro_value" id="gyro_value">
<field name="GYRO">x</field>
</block>
<block type="gyro_value2" id="gyro_value2">
<field name="direction">1</field>
</block>
<block type="gyro_value3" id="gyro_value3">
</block>
</category>`;
}

exports = addToolbox;
