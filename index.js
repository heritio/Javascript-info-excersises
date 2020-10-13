/*let user = {
    name: "John",
    surname: "Smith",
};
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);
*/


//Function to find if object is empty or not
/*
let schedule = { name: "Hello" };

function isEmpty(obj) {
    if (Object.keys(obj).length <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty(schedule));
*/

/*This is a code to sum up the properties in salaries object
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let sal in salaries) {
    sum += salaries[sal];
}

console.log(sum);

*/


/*This is example to multiply numeric values with 2 in an object
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] == "number") {
            obj[prop] *= 2;
        } else {
            obj[prop] = obj[prop];
        }
    }
}

multiplyNumeric(menu);
console.log(menu);

*/
/*
function makeUser() {
    return this;
}


console.log(makeUser().name); // What's the result?
*/

/*
let calculator = {
    read() {
        this.val1 = +prompt("ADD one value", 0);
        this.val2 = +prompt("Add a value", 0);
    },
    sum() {
        return this.val1 + this.val2;
    },
    mul() {
        return this.val1 * this.val2;
    }
}
calculator.read();

*/
/*
let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

console.log(new A() == new B());
*/

/*This is a calculator constructor wiht 3 methods
function Calculator() {

    this.read = function () {
        this.val1 = +prompt("val1", 0);
        this.val2 = +prompt("val2", 0);
    }
    this.sum = function () {
        return this.val1 + this.val2;
    }

    this.mul = function () {
        return this.val1 * this.val2;
    }

}

let calcObj = new Calculator();

console.log(calcObj);
console.log(calcObj.read());
*/

/*
function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("number");
    }

}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);

*/

/*
function sumNums() {
    let num1 = +prompt("Enter num 1");
    let num2 = +prompt("Enter num 2");

    return num1 + num2;

}

console.log(sumNums());
*/


/*Promps until you give it a number
function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}
console.log(readNumber());
*/

/*
function random(min, max) {
    return Math.floor(Math.random() * (max - 2)) + min;
}

console.log(random(2, 5));

*/