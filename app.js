/*eslint-env node*/
'use strict';
const JsGradient = require('./jsGradient.js');
const WordWrap = require('./node_modules/word-wrap/index.js');


const horizontalGradient = function(string, color1, color2) {
    const splitText = string.split('');
    const gradient = JsGradient.generateGradient(color1, color2, splitText.length);
    const prefix = '\\(\\stringsf{{';
    const suffix = '}}\\)';
    const body = splitText.map((letter, index) => `\\color{${gradient[index]}}${letter}`);
    return prefix + body.join('') + suffix;
};

const verticalGradient = function(string, color1, color2, characterLimit = 40) {
    const prefix = '$$\\begin{matrix} \\ ';
    const suffix = '\\end{matrix}$$';
    const startLine = '\\textsf{';
    const endLine = '}';
    const lines = WordWrap(string, {'width': characterLimit}).split('\n');
    const gradient = JsGradient.generateGradient(color1, color2, lines.length);
    const body = lines.map((line, index) => `${startLine}\\color{${gradient[index]}}${line}${endLine}`);

    // console.log(body);
    // console.log(alignedText);
    return prefix + body.join(' \\\\ ') + suffix;
};

// console.log(horizontalGradient('i lkajsf laksjdf alskdfj lasdkjf lasdkjf alskdjf alskdjf alksdjf lkasdj am angery', 'E83535', '35D3E8'));
const copypasta = [ 'What the fuck did you just fucking say ',
    'about me, you little bitch? I\'ll have ',
    'you know I graduated top of my class in ',
    'the Navy Seals, and I\'ve been involved ',
    'in numerous secret raids on Al-Quaeda, ',
    'and I have over 300 confirmed kills. I ',
    'am trained in gorilla warfare and I\'m ',
    'the top sniper in the entire US armed ',
    'forces. You are nothing to me but just ',
    'another target. I will wipe you the fuck ',
    'out with precision the likes of which ',
    'has never been seen before on this'].join('');
console.log(verticalGradient(copypasta, 'ee4c5b', '#FFD460'));
