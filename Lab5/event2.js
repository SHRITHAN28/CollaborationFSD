const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.once('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
eventEmitter.emit('greet', 'Alice');



