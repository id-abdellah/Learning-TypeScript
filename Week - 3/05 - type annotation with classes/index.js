"use strict";
/*
    Type annotation with class
*/
class User {
    constructor(username, id, age) {
        this.u = username;
        this.a = age;
        this.i = id;
        this.sayHi = () => {
            return `Hello ${this.u} your age is ${this.a}`;
        };
    }
    sayWelcome() {
        return `Welcome, ${this.u}`;
    }
}
let userOne = new User("Mohamed", 200, 20);
console.log(userOne.u);
console.log(userOne.a);
console.log(userOne.i);
console.log(userOne.sayHi());
console.log(userOne.sayWelcome());
