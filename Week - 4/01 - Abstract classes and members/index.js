"use strict";
/*
    Class

        Abstract classes and members
*/
// لي في القوانين لي خاص تمشي عليها base class كلاس تقد تقول عليه بلي هو ال Food دبا ال
// derive classes خاص تمشي عليها ونتا كتنشأ ال
// base class هو الي كيورث من ال derived classe ال
// لوخرين تورث منو classes هو كلاس ممعمول باش ال abstract class ال
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("cooking time for pizza is => 1 hour");
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log("cooking time for pizza is => 1/2 hour");
    }
}
let newPizza = new Pizza("Salty Pizza", 200);
console.log(newPizza.title);
console.log(newPizza.price);
newPizza.getCookingTime();
