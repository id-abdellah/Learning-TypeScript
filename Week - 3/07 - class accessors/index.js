"use strict";
/*
    Class

        Get and Set accessors "Getters & Setters"
*/
// private درتيها class فشي property دبا لعندك شي
// private عليها باش تجيب قيمتها او لا تغير قيمتها حيت هي access ف متقدرش ت
// تقد تجيب قيمتها اولا ايضا تبدل القيمة ديالها getters & setters فالحل هو عن طريق ال
class User {
    get usernameGetter() {
        return this.username;
    }
    set usernameSetter(value) {
        this.username = value;
    }
    constructor(username, id, age, address) {
        this.username = username;
        this.id = id;
        this.age = age;
        this.address = address;
        this.sayHi = () => {
            return `Hi, ${this.username}`;
        };
    }
}
let userOne = new User("Mohamed", 100, 20, "Morocco");
console.log(userOne.id);
console.log(userOne.age);
console.log(userOne.address);
console.log(userOne.usernameGetter); // Mohamed
userOne.usernameSetter = "Obito";
console.log(userOne.usernameGetter); // Obito
