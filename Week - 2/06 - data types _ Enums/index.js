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
