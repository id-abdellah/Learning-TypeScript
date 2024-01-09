/*
    Interface

        interface extend
*/

interface User {
    readonly id: number,
    username: string,
    country?: string,
}

interface Moderator {
    role: number | string
}

interface Admin extends User, Moderator {
    isProtect: boolean
}


let aUser: Admin = {
    id: 100,
    username: "mohamed",
    country: "morocco",
    role: "admin",
    isProtect: true
}