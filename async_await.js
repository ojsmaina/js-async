// syntactic suga for promises

// keyword async before function makes it a promise

// keyword await infront of a function makes the funtion wait for a promise


function display(result) {
    console.log(result)
}


// async function sum(a,b) { // this fucntion is / returns a promise.
//     return a+b;
//     //return Promise.resolve(a+b);
// }

// sum(3,5).then(
//     result => display(result)
// );


// await
//let value = await promise; // have the promise predefined. The promise must be created with async

async function greeting() {
    let promise = new Promise(function(resolve, reject) {
        resolve('I am a promise!')
    });

    let display = await promise;

   return display;
}

greeting()
    .then(res => display(res));