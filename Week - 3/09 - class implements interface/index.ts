/*
    Class

        Implements interface
*/

// classes على ال interface فهاد الدرس غنشوفو كيفاش ندير تطبيق لشي

interface Settings {
    darkTheme: boolean,
    font?: string,
    save(): void
}

// علي الكلاس interface باش كنطبقو syntax هدا هو ال
class UserPreferences implements Settings {
    constructor(public darkTheme: boolean, public font: string, public username: string) { }
    save(): void {
        console.log("saved")
    }
}

let u1 = new UserPreferences(true, "Open sans", "obito");

console.log(u1.darkTheme)
console.log(u1.font)
console.log(u1.username)
u1.save()

/*
    true
    Open sans
    obito
    saved
*/