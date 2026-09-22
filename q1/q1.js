const EventEmitter = require("events");

const bell = new EventEmitter();

bell.on("classStart", () => {
    console.log("Class started!");
});

bell.on("classEnd", () => {
    console.log("Class ended!");
});

bell.emit("classStart");

setTimeout(() => {
    console.log("setTimeout: Ring bell");
}, 0);

setImmediate(() => {
    console.log("setImmediate: Ring bell");
});

process.nextTick(() => {
    console.log("process.nextTick: Ring bell");
});

bell.emit("classEnd");