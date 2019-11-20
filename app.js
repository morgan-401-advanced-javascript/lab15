'use strict';

const fileChanger = require('./src/file-changer.js');

let file = process.argv.slice(2).shift();

fileChanger.alterFile(file);

