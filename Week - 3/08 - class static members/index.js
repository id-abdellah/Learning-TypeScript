"use strict";
/*
    Class

        Static Members
*/
class User {
    static getCount() {
        console.log(this.created);
    }
    constructor(username) {
        this.username = username;
        User.created++;
    }
}
User.created = 0;
let user1 = new User("Mohamed");
let user2 = new User("Obito");
let user3 = new User("ID-ABDELLAH");
let user4 = new User("Madara");
User.getCount();