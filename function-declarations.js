// function sayHello() {
//     console.log('.....................');
//     console.log('Hello!');
//     console.log('.....................');
// }

// sayHello();

// let a = sayHello;
// a();
// a();
// a();


// function sayHello(name) {
//     console.log('.....................');
//     console.log('Hello ' + name + '!');
//     console.log('.....................');
// }
//
// sayHello('Bob');
// sayHello('Beth');
// sayHello('Mr Tibbles');
// sayHello('Dan');

function calculateTax(amount) {
    let result;
    result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);