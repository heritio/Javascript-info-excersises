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