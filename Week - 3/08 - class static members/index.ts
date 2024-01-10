/*
    Class

        Static Members
*/

// لي بغيتيهم يكونو خاصين بالكلاس نفسو methods هي الخواص او static ان ال js كما شفنا فكورس ال

class User {
    private static created: number = 0;
    static getCount(): void {
        console.log(this.created)
    }

    constructor(public username: string) {
        User.created++
    }
}

let user1 = new User("Mohamed");
let user2 = new User("Obito");
let user3 = new User("ID-ABDELLAH");
let user4 = new User("Madara");

User.getCount() // 4