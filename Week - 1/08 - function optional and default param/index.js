"use strict";
/*
    - Functions
        Optional and default parameter
    
    - in Javascript, every parameter is optional => there params will return "undefined" if you didn't use it

    - "?" => Optional parameter

*/
/*
    الا مدخلتي قيمتو فراه كيرجع القيمة الافتراضية لي ديتي ليها default param دبا حنا عارفين ان فال جافاسكريبت بلي ال

    undefined يرجع القيمة الافتراضية بالزز كدير فقيمتو param و مثلا بغتي من شي
*/
function showMyData(name, age, country = "morocco") {
    return `${name} - ${age} - ${country}`;
}
console.log(showMyData("mohamed", 20, undefined)); // mohamed - 20 - morocco
/*
    Optional parameter "?"

    optional parameter كاينة شي حاجة سميتها ال typescript فال
    اي تقد ديرو و تقد مديروش parameter optional ولي كتمكنك انك تخلي شي
    مستعملتيهش param مغينبهكش بلي كاين شي compiler فحالة درتيه هو هداك كلشي مزيان فحالة مدرتيهش ال

    غير هو كاين شرط ضرووري
    argument list خاصو يكون فاللخر ديال optional لي بغيتيه يكون parameter وهو انه خاص ال
    params ولي تاهيا خاصها دار فاللخر ديال rest params تقريبا بحال قضية ال
*/
function showMyData2(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showMyData2("mohamed", 20));
/*
    Rest parameter
*/
function sum(...nums) {
    let result = 0;
    nums.forEach(num => result += num);
    return result;
}
console.log(sum(10, 20, 30, 100, 100.5, +true)); // 261,5 
