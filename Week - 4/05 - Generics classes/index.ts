/*
    Generics 

        Classes
*/

// default value فراه تقد دير ليه generics is param بما ان ال
class User<T = string> {
    constructor(public username: T) { }
    showGreeting(msg: T): void {
        console.log(`${msg}, ${this.username}`)
    }
}

let userOne = new User<string>("Obito");
console.log(userOne.username)
userOne.showGreeting("Hello how are you sir")

// string لتحت عطيناها method حيت هنايا خدمنا ب رقم ولكن فال union types هنايا درنا ال
// تخدم بيه حيت هو باش خدمنا هنايا number نوع method عطات لل generic حيت ال
let userTwo = new User<number | string>(200);
console.log(userTwo.username)
userTwo.showGreeting("Hello how are you sir")