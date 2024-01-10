"use strict";
/*
    Class

        Data access modifiers & parameters properties

        - Public
            - All members of a class in typescript are public
            - All public members can be accessed anywhere without any restrictions
        - Private
            - Member are visible only to that class and are not accessible outside the class
        - Protected
            - same as private but can be accessed using the deriving class


        Typscript is a layer on top of javascript
        it should remove all annotations an although access modifiers "Private for example"
*/
// private and protected ولكن ممكمولش يعني مفيهاش ال OOP فيها js دبا ال
// ليهم من اي بلاصة access هو ان جميع الخواص او الاعضاء يمكن ليك ت public دبال ال
// هو ان الاعضاء او الخواص مرئية فقط للكلاس وحدو وميمكنش تدخل ليهم من اي بلاصة اخرى private ال
// غير هو يمكن ليك ت اكسس ليه من الكلاسس لي خارجين من الكلاس ديالها private وهو بحالو بحال ال protected اما ال
// subclasses يعني ال
// typescripte دبا هاد الخواص كاملين الدور ديالهم انهم كيحذروك ان هاد الخاصية عامة او خاصة او محمية محدك خدام فال
// كامل هادشي كيمشي compile ولكن فاش كدير
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
// console.log(userOne.u); // Property 'u' is private and only accessible within class 'User'
// console.log(userOne.a); // Property 'a' is protected and only accessible within class 'User' and its subclasses
console.log(userOne.i);
console.log(userOne.sayHi());
console.log(userOne.sayWelcome());
/* =============================================================================== */
// parameter properties و بالنسبة لل
// params ديرها كاملة فال private and protected ... تقد غاد دير الروينة لي درتي باش تحدد ال
class UserTwo {
    // بهاد الطريقة هادي
    constructor(username, id, age) {
        this.username = username;
        this.id = id;
        this.age = age;
        this.sayHi = () => {
            return `Hello ${this.username} your age is ${this.age}`;
        };
    }
}
// لهاد الكود غيطلع ليك على الشكل التالي compile وفاش غدير
