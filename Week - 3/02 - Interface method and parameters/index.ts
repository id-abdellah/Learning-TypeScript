/* 
    Interface
    
        - Methods and parameters
*/

interface User {
    id: number,
    username: string,
    country: string,
    sayHi(): string,
    sayWelcome: () => string,
    getDouble(num: number): number
}

let aUser: User = {
    id: 100,
    username: "Mohamed",
    country: "Morocco",
    sayHi() {
        return "Hi"
    },
    sayWelcome: () => {
        return "Welcome"
    },
    getDouble(n) {
        return n * 2
    }
}

console.log(aUser.id)
console.log(aUser.username)
console.log(aUser.country)
console.log(aUser.sayHi())
console.log(aUser.sayWelcome())
console.log(aUser.getDouble(20))

/* Output

    100
    Mohamed
    Morocco
    Hi
    Welcome
    40

*/