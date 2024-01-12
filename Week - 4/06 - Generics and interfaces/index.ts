/*
    Generics

        Classes and interfaces
*/

interface Book {
    itemType: string,
    title: string,
    isbn: number,
    publicationDate?: string,
}

interface Game {
    itemType: string;
    gameName: string,
    price: number,
    style?: string,
}

class Collection<T> {
    public data: T[] = [];
    addItem(item: T): void {
        this.data.push(item)
    }
}

let itemOne = new Collection<Book>();
itemOne.addItem({ itemType: "Book", title: "Quran", isbn: 1111, publicationDate: "since 1400 y" });
itemOne.addItem({ itemType: "Book", title: "atomics habits", isbn: 231243, publicationDate: "2020" });
console.log(itemOne)


let itemTwo = new Collection<Game>();
itemTwo.addItem({ itemType: "Game", gameName: "Gta san andreas", price: 40, style: "Open World" })
itemTwo.addItem({ itemType: "Game", gameName: "Gta Vice city", price: 40, style: "Open World" })
console.log(itemTwo);
