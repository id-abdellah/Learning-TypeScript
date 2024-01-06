"use strict";
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
var Levels;
(function (Levels) {
    Levels[Levels["Kid"] = 0] = "Kid";
    Levels[Levels["Easy"] = 1] = "Easy";
    Levels[Levels["Medium"] = 2] = "Medium";
    Levels[Levels["Hard"] = 3] = "Hard";
})(Levels || (Levels = {}));
console.log(0 /* Levels.Kid */); // 0
console.log(1 /* Levels.Easy */); // 1
console.log(2 /* Levels.Medium */); // 2
console.log(3 /* Levels.Hard */); // 3
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
function someWork() {
    return 3;
}
var First;
(function (First) {
    First[First["a"] = 10] = "a";
    First[First["b"] = 15] = "b";
    First[First["c"] = 20] = "c";
})(First || (First = {}));
var Second;
(function (Second) {
    Second[Second["Kid"] = 10] = "Kid";
    Second[Second["Easy"] = 9] = "Easy";
    Second[Second["Medium"] = 6] = "Medium";
    Second[Second["Hard"] = someWork()] = "Hard"; // 3
})(Second || (Second = {}));
