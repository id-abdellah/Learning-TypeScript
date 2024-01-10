/*
    Type annotation with class
*/

class User {
    // classes مع ال type annotation بالنسبة لل
    // constructor ديال الخواص لي فال types فراه هنايا فين كنحددو ال
    u: string;
    a: number;
    i: number;
    sayHi: () => string;

    constructor(username: string, id: number, age: number) {
        this.u = username;
        this.a = age;
        this.i = id;
        this.sayHi = () => {
            return `Hello ${this.u} your age is ${this.a}`
        };
    }

    sayWelcome(): string {
        return `Welcome, ${this.u}`
    }
}

let userOne = new User("Mohamed", 200, 20);

console.log(userOne.u); // Mohamed
console.log(userOne.a); // 20
console.log(userOne.i); // 200
console.log(userOne.sayHi()); // Hello Mohamed your age is 20 
console.log(userOne.sayWelcome()); // Welcome, Mohamed