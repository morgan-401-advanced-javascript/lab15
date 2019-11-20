'use strict';

const fs = require('fs');
const fileChanger = require('./src/file-changer.js');
const  emitter = require('./src/emitter.js');
const logger = require('./src/logger');

let file = process.argv.slice(2).shift();

fileChanger.alterFile(file);


