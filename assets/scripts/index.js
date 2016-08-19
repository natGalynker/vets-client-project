'use strict';
const authEvents = require('./auth/events.js');
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled



















$(() => {
authEvents.addHandlers();
});
