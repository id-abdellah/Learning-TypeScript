/*
    Data types

        - Enums => Enumartions
            - Allow us to declare a set of named constants
            - used for logical grouping collection of constants "Collections of related values"
            - it organize your code
            - by default Enums are Number-based, First element is zero
            - 3 types
                - there is a Numeric enums
                - there is a string based enums
                - there Heterogenous enums [string + number]
*/

// ل ثوابت مرتبطة ببعض group انها كتخليك دير enums فكرة ال
// مثلا عندك اللعبة ديال سرعة الكتابة, فهي فيها مستويات كل مستوى فيه عدد ثواني معين لمكتبتيش الكلمة فديك المدة كتخسر
// دوك المستويات كدير كل واحد ك ثابت فيه عدد الثواني المعنية

// enums كاينة 3 دلانواع ديال ال
// Numeric, string, heterogenous enums


// وكيتم طالع 0 فحالة مدرتيش قيم كيبدا اللولة ب قيمة
// اولا لدرتي اللولة شي قيمة مثلا ف لوخرين غيبداو من ديك القيمة ويتمو طالعين
const enum Levels {
    Kid,
    Easy,
    Medium,
    Hard
}

console.log(Levels.Kid); // 0
console.log(Levels.Easy); // 1
console.log(Levels.Medium); // 2
console.log(Levels.Hard); // 3






/* ======================================================== */




/*
    tsconfig.json

    فملف الجافاس enum ف كيبن ال compile لفوق وكدير snytax فاش كديرو بحال ال enum دبا ال
    ولكن بشكل متختلف بطبيعة الحال

    ديالو فملف الجافاسكريبت syntax ف مغتلقاش ال compile وكدير const enum ولكن فاش كدير
    preserveConstEnums باش تخليه يبان خاص تفعل واحد الخيار سميتو
*/

/*
    Addvanced topics
        - Enum can refer to other enum
        - Enum can refer to his self
        - Enum can Have Calculations
        - Enum can Have functions
*/

function someWork(): number {
    return 3;
}

enum First {
    a = 10,
    b = 15,
    c = 20
}

enum Second {
    Kid = First.a,
    Easy = 9,
    Medium = Easy - 3, // 6
    Hard = someWork() // 3
}