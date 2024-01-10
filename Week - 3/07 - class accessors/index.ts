/*
    Class

        Get and Set accessors "Getters & Setters"
*/


// private درتيها class فشي property دبا لعندك شي
// private عليها باش تجيب قيمتها او لا تغير قيمتها حيت هي access ف متقدرش ت
// تقد تجيب قيمتها اولا ايضا تبدل القيمة ديالها getters & setters فالحل هو عن طريق ال

class User {
    // Syntax of getters and setters
    public get usernameGetter(): string {
        return this.username
    }

    public set usernameSetter(value: string) {
        this.username = value;
    }

    sayHi: () => string;
    constructor(private username: string, public readonly id: number, public age: number, public address: string) {
        this.sayHi = () => {
            return `Hi, ${this.username}`
        }
    }
}

let userOne = new User("Mohamed", 100, 20, "Morocco");

console.log(userOne.id)
console.log(userOne.age)
console.log(userOne.address)

// functions فراه ماشي بحال ال setters بالنسبة لل
console.log(userOne.usernameGetter); // Mohamed
userOne.usernameSetter = "Obito";
console.log(userOne.usernameGetter); // Obito


// NB
// او اتفاقية مع المطورين لي معاك convention تقد دير private keyword بالنسبة للغات لي معندها
// underscore عن طريق تبدا سمية الخاصية بال private على ان هاد الخاصية راهي