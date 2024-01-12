/*
    Generics

        - Arrow function syntax
        - Multiple types
*/

// arrow function syntax

let arrowFunSyntax = <T>(val: T): T => {
    return val
};


// discussion

// فغاع البلايص التلاتة فراه المترجم غينبهك generic type فحال الحالة فاش كدير ال
// شغيكون generic وحنا فهاد الساعة مزال معارفينش ال generic ولكن كتبتي ليه بلي غترجع string حيت نتا رجتي
// output و ال param ف نوع ال generic يعني ماشي ضروي دير ال
function retSomething<T>(val: T): string {
    return "Hello my Name is " + val
}


// Multiple types

function multipleType<T, S>(valOne: T, valTwo: S): string {
    return `the first value has the type ${typeof valOne} and the second has the type ${typeof valTwo}`
}

console.log(multipleType<string, number>("Mohamed", 100))
console.log(multipleType<number, string>(100, "Mohamed"))