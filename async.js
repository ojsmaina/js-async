// will finish later
// functions running in parallel with others

let milliseconds = 3000;
setTimeout(toCall, milliseconds);  // takes time (miliseconds) after which the callback function will be executed.

function toCall() {
    console.log(`I was called after ${milliseconds} milliseconds`);
}

// a whole function can also be passed as an argument
setTimeout(function callback(value = 2) {
    console.log(`I am called with ${value} after 3000 milliseconds`);
}, 3000);


// clear the interval
setInterval(function callback() {
    console.log(`Are we there yet?`);
}, 1000);