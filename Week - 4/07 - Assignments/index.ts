/* ------------------------- Assignment 1 ------------------------- */

// Do Not Edit
type numandstring = number | string;

abstract class Game {
    constructor(public title: string, public price: numandstring) { }
    abstract getLocation(): string;
    abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game {
    constructor(title: string, public price: numandstring, public rate: number) {
        super(title, price)
    }
    getLocation(): string {
        return "Location"
    }
    getDiscount(): string {
        return "Discount"
    }
}

class Action extends Game {
    constructor(title: string, public price: numandstring, public rate: number, public company: string) {
        super(title, price)
    }
    getLocation(): string {
        return "Location"
    }
    getDiscount(): string {
        return "Discount"
    }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"







/* ------------------------- Assignment 3 ------------------------- */

// Write Class Code Here

class Game2<T> {
    constructor(public title: T, public price: number) { }
    getDiscount(v: T): void {
        console.log(`th discound is ${v}`)
    }
}

// Do Not Edit Here
let game2One = new Game2<string>("Ys", 100);
let game2Two = new Game2<number>(2064, 100); // There's A Game Called "2064"

console.log(game2One.title); // "Ys"
console.log(game2One.price); // 100
game2One.getDiscount("50"); // "The Discount Is 50"

console.log(game2Two.title); // 2064
console.log(game2Two.price); // 100
game2Two.getDiscount(80); // "The Discount Is 80"