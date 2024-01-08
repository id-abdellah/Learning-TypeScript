/*
    Interface

    - Interface Declaration

        Serve Like types
        The interface describes the shape of an object
        it defines a syntax to follow

        u can use it with objects
        u can use it with Functions
        u can use readonly and optional with it also

*/


/*
    كتمشي عليه object لل syntax ولي كدير بيها types هي بحال ال interface قالك اسيدي بلي ال
*/

interface User {
    readonly id: number,
    readonly username: string,
    readonly age: number,
    country?: string
}



let aUser: User = {
    id: 100,
    username: "Obito",
    age: 20,
    country: "morocco"
}

console.log(aUser)