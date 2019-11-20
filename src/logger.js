'user strict';
const emitter = require('./emitter.js');


emitter.on('file-error', function(message){
  console.log('changing file '+ message.file + ' failed with error ' + message.message);
});
emitter.on('file-saved', function(message){
  console.log('changing file '+ message.file + ' succeeded!');
});

module.exports = {};