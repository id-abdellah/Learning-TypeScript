"use strict";
/*
    Class

        Implements interface
*/
class UserPreferences {
    constructor(darkTheme, font, username) {
        this.darkTheme = darkTheme;
        this.font = font;
        this.username = username;
    }
    save() {
        console.log("saved");
    }
}
let u1 = new UserPreferences(true, "Open sans", "obito");
console.log(u1.darkTheme);
console.log(u1.font);
console.log(u1.username);
u1.save();
