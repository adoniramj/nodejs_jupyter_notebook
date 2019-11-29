const EventEmitter = require('events')
console.log(typeof EventEmitter)

class MyEmitter extends EventEmitter{}
console.log(typeof MyEmitter)

let myEmitter = new MyEmitter()
console.log(typeof myEmitter)


