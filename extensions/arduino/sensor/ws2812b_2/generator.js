/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ws2812b_init = function (block) {
        const pin = block.getFieldValue('PIN');
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.begin(${pin}, ${num});\n`;
    };

    Blockly.Arduino.ws2812b_brightnessNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ws2812b_setBrightness = function (block) {
        const pin = block.getFieldValue('PIN');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.setBrightness(${brightness});\n`;
    };

    Blockly.Arduino.ws2812b_clear = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.clear();\n`;
    };

    Blockly.Arduino.ws2812b_setRangeColor = function (block) {
        const pin = block.getFieldValue('PIN');

        const start = Blockly.Arduino.valueToCode(block, 'START', Blockly.Arduino.ORDER_ATOMIC);
        const end = Blockly.Arduino.valueToCode(block, 'END', Blockly.Arduino.ORDER_ATOMIC);
        const color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.setRangeColor(${start}, ${end}, ${color});\n`;
    };

    Blockly.Arduino.ws2812b_rgbToColor = function (block) {
        const red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
        const green = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
        const blue = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_.rgbToColor = `\nuint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b)\n{\n  return (uint32_t)((((uint32_t)r<<16) | ((uint32_t)g<<8)) | (uint32_t)b);\n}`;

        // return `rgbToColor(round(${red}), round(${green}), round(${blue}))`;
        return [`rgbToColor(round(${red}), round(${green}), round(${blue}))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ws2812b_showRainbow = function (block) {
        const pin = block.getFieldValue('PIN');
        const num1 = Blockly.Arduino.valueToCode(block, 'NUM1', Blockly.Arduino.ORDER_ATOMIC);
        const num2 = Blockly.Arduino.valueToCode(block, 'NUM2', Blockly.Arduino.ORDER_ATOMIC);
        const col1 = Blockly.Arduino.valueToCode(block, 'COR1', Blockly.Arduino.ORDER_ATOMIC);
        const col2 = Blockly.Arduino.valueToCode(block, 'COR2', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.showRainbow(${num1}, ${num2}, ${col1}, ${col2});\n`;
    };

    Blockly.Arduino.ws2812b_shift = function (block) {
        const pin = block.getFieldValue('PIN');
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.shift(${num});\n`;
    };

    Blockly.Arduino.ws2812b_rotate = function (block) {
        const pin = block.getFieldValue('PIN');
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.rotate(${num});\n`;
    };

    Blockly.Arduino.ws2812b_showBarGraph = function (block) {
        const pin = block.getFieldValue('PIN');
        const num1 = Blockly.Arduino.valueToCode(block, 'NUM1', Blockly.Arduino.ORDER_ATOMIC);
        const num2 = Blockly.Arduino.valueToCode(block, 'NUM2', Blockly.Arduino.ORDER_ATOMIC);
        const col1 = Blockly.Arduino.valueToCode(block, 'VAL1', Blockly.Arduino.ORDER_ATOMIC);
        const col2 = Blockly.Arduino.valueToCode(block, 'VAL2', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
        Blockly.Arduino.definitions_[`ws2812b_init_${pin}`] = `NeoPixel neoPixel_${pin};`;

        return `neoPixel_${pin}.showBarGraph(${num1}, ${num2}, ${col1}, ${col2});\n`;
    };

    return Blockly;
}

exports = addGenerator;
