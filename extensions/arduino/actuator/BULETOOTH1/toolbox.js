/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_BULETOOTH1_CATEGORY}" id="BULETOOTH1_CATEGORY" colour="#5A5AAD" secondaryColour="#484891">
    <block type="BULETOOTH1_button" id="BULETOOTH1_button">
        <field name="STATE">10</field>
    </block>
    <block type="BULETOOTH1_track" id="BULETOOTH1_track">
        <field name="STATE">10</field>
    </block>
    <block type="BULETOOTH1_infrared" id="BULETOOTH1_infrared">
    </block>
</category>`;
}

exports = addToolbox;
