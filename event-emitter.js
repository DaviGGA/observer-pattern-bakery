const EventEmitter = require('events');
module.exports = new EventEmitter()

class BakeryEmitter extends EventEmitter {

    // Remove a event by it's index in _events
    remove(eventName, index) {
        const event = this._events[eventName];
        event.splice(index,1)   
    }
}

module.exports = new BakeryEmitter()