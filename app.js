/*eslint-env node*/
'use strict';
const JsGradient = require('./jsGradient.js');
const WordWrap = require('./node_modules/word-wrap/index.js');


const horizontalGradient = function(string, color1, color2) {
    const splitText = string.split('');
    const gradient = JsGradient.generateGradient(color1, color2, splitText.length);
    const prefix = '\\(\\textsf{{';
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
// const copypasta = `What the fuck did you just fucking say about me, you little shit? I’ll have you know I graduated top of my contingent orientation 4 hours class, and I’ve been getting redefines expectations and not even having to get performance reviews, and I have caused over 300 confirmed SEV-1s. I was trained in the art of HACK and I’m the top contingent worker in the entire Facebook Engineering Org. You are nothing to me but just another FBID. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me on Facebook? Think again, fucker. As we speak I am contacting my secret network of Contingent Workers across FB and your FBID is being checkpointed right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can TROLL you in over seven hundred ways, and that’s just with crushinator. Not only am I extensively trained in Javascript and HTML, but I have access to the entire arsenal of WWW and I will use it to its full extent to wipe your miserable ass off the face of the Internet, you little shit.`;
const copypasta = 'no u';
console.log(horizontalGradient(copypasta, '#ee4c5b', '#FFD460'));
