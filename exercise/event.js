var e = require('events');
var event = new e.EventEmitter();
event.addListener('some_event', function(){
    console.log("some_event occured.");
});
setTimeout(function(){
    event.emit('some_event');
}, 1000);
