"use strict";
/*
    Generics

        Classes and interfaces
*/
class Collection {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.addItem({ itemType: "Book", title: "Quran", isbn: 1111, publicationDate: "since 1400 y" });
itemOne.addItem({ itemType: "Book", title: "atomics habits", isbn: 231243, publicationDate: "2020" });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.addItem({ itemType: "Game", gameName: "Gta san andreas", price: 40, style: "Open World" });
itemTwo.addItem({ itemType: "Game", gameName: "Gta Vice city", price: 40, style: "Open World" });
console.log(itemTwo);
