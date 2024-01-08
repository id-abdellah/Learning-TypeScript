"use strict";
/*
    Data types

    - Void
    - Never
*/
/*
    Void

    A function that doesn't explicitly return a value implicitly returns the value undefined in JavaScript. Although we typically say that such a function "doesn't return anything", it returns. We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.s

    
    Never

    A function that has a never return type never returns. It doesn't return undefined, either. The function doesn't have a normal completion, which means it throws an error or never finishes running at all.
*/
/*
    شي حاجة console وهي مثلا فاش كتكون عندك فانكشن كطبع فال void بالنسبة لل
    undefined ولكن هي براسها مكترجع والو تاقيمة, فاش كتستدعيها كدير ديك المهمة ديال الكونسول و كترجع
    لشي قيمة return لي مكيكون فيها function هي ال void يعني ال
*/
function f1(name) {
    console.log(name);
}
function f2(name) {
    console.log(name);
    return "someValue";
}
/*
    هي الفانكشن لي مكترجعش اصلا اي معندها القدرة انها ترجع شي قيمة never اما بالنسبة لل
    يعني مغيوصلش ليه unreachable code فاللخر ديالها كيقول ليك بلي هدا return يعني فاش كدير
    infinite loop اولا كدير شي throw an error لي كدير functions كمثال بحال ال
*/
function fail() {
    throw new Error("Mission is Faild");
    // return; // unreachable code
}
function fail2() {
    while (true) {
        console.log("Hello");
    }
    // return; // unreachable code
}
/*
    tsconfiguration.ts

    allowUnreachableCode سميتها typescript كاينة خاصية فملف الاعدادات ديال
    فبحال الحالات لي لفوق unreachable الا فعلتيه كينبهك انه كاين كود
*/ 
