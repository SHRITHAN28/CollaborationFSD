const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('details', (name, age) => {
    console.log(`Hello ${name}, ${age}`);
});
eventEmitter.emit('details', 'Alice', 30);
