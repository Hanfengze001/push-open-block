/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_MP3_ICO = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCc+PGRlZnM+PHN0eWxlIHR5cGU9J3RleHQvY3NzJz48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSdNNTAxLjEwNiA4OC44MjhoMzg3Ljk0NmMzNi43MTYgMCA2Ni43NTIgMzAuMDM2IDY2Ljc1MiA2Ni43Mzh2NzEzLjMxNmMwIDM2LjcwMS0zMC4wMzYgNjYuNzM4LTY2Ljc1MiA2Ni43MzhINTAxLjEwNmMtMzYuNzAxIDAtNjYuNzM4LTMwLjAzNi02Ni43MzgtNjYuNzM4Vjc4MS45MmMtODcuNDU5LTMxLjYzMi0xMDQuMTkzLTEyNC40ODctMTA0LjE5My0yMjIuMTE2aDAuMDU3YzAtMTYuNTM1IDAuNDctMzIuOTg0IDEuMTY3LTQ5LjE5MWwtMy42MTctMTAuMzI1Yy0xNi4zMjEtNDcuMDI2LTMzLjI1NS05NS43MzQtOTUuMjM1LTEwOC4wNTN2Ny41NjJsLTYyLjkzNCAxMC42OTZjLTkuNTQyIDE4LjA3My0yOC41MTIgMzAuMzkyLTUwLjM0NSAzMC4zOTItMzEuNDE4IDAtNTYuODgyLTI1LjQ2NC01Ni44ODItNTYuODY3IDAtMzEuNDE4IDI1LjQ2NC01Ni44OTcgNTYuODgyLTU2Ljg5NyAxOC4wNDQgMCAzNC4xMjQgOC40MDMgNDQuNTM1IDIxLjUwN2w2OC43NDQgMy45NTh2Ny44NjJjNTYuNTk4IDcuNTYzIDg0LjE4NCAzOC44MjMgMTAyLjUxMyA3Ni42OTIgMS4zNTMtMzAuOTkgMS43NTItNTkuMTc1LTEuMzEtODEuNDYzLTkuMjQzLTY3LjUyMS00My4zOTUtOTQuODIzLTY2LjA1NC0xMDUuNjMybC00LjUzIDguODczLTYwLjk1NS0xOC45N2MtMTYuNjc2IDExLjc5Mi0zOS4xNjQgMTQuMTg1LTU4LjY0NyA0LjI3My0yOC4wMDEtMTQuMjI4LTM5LjE2Ni00OC40NjYtMjQuOTM4LTc2LjQ3OSAxNC4yNDItMjcuOTk5IDQ4LjQ3OS0zOS4xNjQgNzYuNDc4LTI0LjkyMyAxNi4wOTQgOC4xNzYgMjYuNjE4IDIyLjk0NCAyOS45NjUgMzkuMzM2bDU5LjUwMyAzNC42NzgtMy40NzUgNi44MzdjMjkuNDgxIDE0LjM0MiA3MS4yOTUgNDguNDM3IDgyLjIxOCAxMjguMDM0IDQuNTE1IDMyLjkyNyAyLjI2NSA3NS4xNjgtMC4xNzEgMTIwLjY4NS0wLjU4MyAxMS4xMjMtMS4xODMgMjIuNDMxLTEuNzA5IDMzLjc5NiAxMy43NzEgMzguMDQgMzAuMzA2IDcxLjk3NyA3Mi45MzMgODAuMTk1VjE1NS41NjVjMC0zNi43MDEgMzAuMDM2LTY2LjczNyA2Ni43MzgtNjYuNzM3eiBtLTY2LjczOCA2NTkuMTY4VjYxNi43MjljLTM2LjE0NS00LjY4NC01OC40MjEtMjEuMzItNzQuMTU4LTQzLjkwNyAxLjM2OCA3NS4xOTcgMTUuNTUyIDE0NS4xMzcgNzQuMTU4IDE3NS4xNzR6IG0xMzAuNjI2LTM5NC4wNzJ2MTUzLjM0Mmg0Ni41VjM1My45MjRoLTQ2LjV6TTc4NS42IDI4Mi41ODd2MjQuNzY3aDQ2LjQ4NXYtMjQuNzY3SDc4NS42eiBtLTczLjIwNCA4Ni4wNDl2MjQuNzhoNDYuNDg1di0yNC43OGgtNDYuNDg1eiBtLTcyLjIyLTI0LjczOHYyNC43NjdoNDYuNXYtMjQuNzY3aC00Ni41eiBtLTc1LjE4Mi0zMi41NDJ2MjQuNzgxaDQ2LjV2LTI0Ljc4MWgtNDYuNXogbTIyMC42MDYgNy45NzZ2MTg3LjkzNWg0Ni40ODVWMzE5LjMzMkg3ODUuNnogbS03My4yMDQgODYuMDYydjEwMS44NzJoNDYuNDg1VjQwNS4zOTRoLTQ2LjQ4NXogbS03Mi4yMi0yMS43NzR2MTIzLjY0N2g0Ni41VjM4My42MmgtNDYuNXogbTUxLjkyNiAyMDUuNTIyYy00Mi4zOTggMC04MC43OTMgMTcuMTkxLTEwOC41NjUgNDQuOTc2LTI3Ljc5OSAyNy43ODYtNDQuOTkgNjYuMTgyLTQ0Ljk5IDEwOC41NjYgMCA0Mi4zOTggMTcuMTkxIDgwLjc5MyA0NC45OSAxMDguNTc5IDI3Ljc3MSAyNy43ODUgNjYuMTY3IDQ0Ljk3NiAxMDguNTY1IDQ0Ljk3NiA0Mi4zOTkgMCA4MC43OC0xNy4xOTEgMTA4LjU2Ni00NC45NzYgMjcuNzg1LTI3Ljc4NiA0NC45NzYtNjYuMTgyIDQ0Ljk3Ni0xMDguNTc5IDAtNDIuMzg0LTE3LjE5MS04MC43OC00NC45NzYtMTA4LjU2Ni0yNy43ODYtMjcuNzg1LTY2LjE2OC00NC45NzYtMTA4LjU2Ni00NC45NzZ6IG02My45NzUgODkuNTY3Yy0xNi4zNjQtMTYuMzc3LTM4Ljk5NS0yNi41MDMtNjMuOTc1LTI2LjUwMy0yNC45OTMgMC00Ny42MjQgMTAuMTI1LTYzLjk4OSAyNi41MDMtMTYuMzYzIDE2LjM2NC0yNi40OSAzOC45OTUtMjYuNDkgNjMuOTc1IDAgMjQuOTkzIDEwLjEyNyA0Ny42MjQgMjYuNDkgNjMuOTg5IDE2LjM2NCAxNi4zNjMgMzguOTk1IDI2LjQ5IDYzLjk4OSAyNi40OSAyNC45OCAwIDQ3LjYxMS0xMC4xMjcgNjMuOTc1LTI2LjQ5IDE2LjM3Ny0xNi4zNjQgMjYuNTAzLTM4Ljk5NSAyNi41MDMtNjMuOTg5IDAtMjQuOTgtMTAuMTI2LTQ3LjYxMS0yNi41MDMtNjMuOTc1ek01MTkuODg5IDE3Ny40ODN2MzcxLjI1NUg4NzQuNDRWMTc3LjQ4M0g1MTkuODg5eicgZmlsbD0nI2I3NjZhZCc+PC9wYXRoPjwvc3ZnPg==";

    return `
<category name="MP3" id="QH_MP3_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_MP3_ICO}">
    <block type="mpy_esp32_Mp3_init">
        <field name="tx">5</field>
        <field name="rx">18</field>
    </block>
    <block type="mpy_esp32_Mp3_vol_change"></block>
    <block type="mpy_esp32_Mp3_vol_set">
        <value name="vol">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="mpy_esp32_Mp3_set_EQ"></block>
    <block type="mpy_esp32_Mp3_prev_next_track"></block>
    <block type="mpy_esp32_Mp3_cycle_singles">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="mpy_esp32_Mp3_play_pause_stop"></block>
</category>
`;

}

exports = addToolbox;