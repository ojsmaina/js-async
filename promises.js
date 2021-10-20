// producing code
// consuming code
// i promise to get you back the results 

// resolve on success
// reject on error

// Promise statuses:  pending , fulfilled , rejected

function display(result) {
    console.log(`the result is: ${result}`)
}

//  let promise = new Promise(function(resolve, reject) {

//     let x = 2;

//     if(x == 0) {
//         resolve('OK');
//     } else {
//         reject('Error')
//     }
//  });


//  promise.then(
//      function(value) {display(value);},
//      function(value) {display(value);}
//  );


let success = new Promise((resolve, reject) => {
    setTimeout(function process(){
        resolve(2+2)
    }, 4000)
});

success.then(result => display(result));

let rejectPromise = new Promise(function(resolve, reject) {
    setTimeout(function process() {
        let result = 2/0;
        if(result === Infinity) {
            throw new Error('Division by zero')
        }
        resolve(result);
    }, 5000)
});

rejectPromise
.then(console.log('I will wait for the results'))
.then(result => {
    display(result)
}) // the result will be displayed after long process finishes.
.catch(error => {
    console.log(error)
});


