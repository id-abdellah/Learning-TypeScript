/*
    Class
        Abstract classes and members
*/

// لي في القوانين لي خاص تمشي عليها base class كلاس تقد تقول عليه بلي هو ال Food دبا ال
// derive classes خاص تمشي عليها ونتا كتنشأ ال
// base class هو الي كيورث من ال derived classe ال

// لوخرين تورث منو classes هو كلاس ممعمول باش ال abstract class ال

abstract class Food {
    constructor(public title: string) { }

    // خاصك تضيفها فيه derive class بغيناها انك فاش تنشاء اي method دبا هاد ال
    // abstract keyword ولهذا سبقناها ب
    // خاص تاخذها وتقولها شنو غدير فكولا كلاس جديد abstract class وبما انها مجردة ف هي مكدير والو هنايا فال
    abstract getCookingTime(): void;
}

class Pizza extends Food {
    constructor(title: string, public price: number) {
        super(title);
    }
    getCookingTime(): void {
        console.log("cooking time for pizza is => 1 hour")
    }
}

class Burger extends Food {
    constructor(title: string, public price: number) {
        super(title);
    }
    getCookingTime(): void {
        console.log("cooking time for pizza is => 1/2 hour")
    }
}

let newPizza = new Pizza("Salty Pizza", 200);
console.log(newPizza.title); // Salty Pizza
console.log(newPizza.price); // 200
newPizza.getCookingTime(); // cooking time for pizza is => 1/2 hour