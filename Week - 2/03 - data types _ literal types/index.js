"use strict";
/*
    Data types

        - literal types
*/
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(10, 10)); // 0
console.log(compare(10, 20)); // -1
console.log(compare(10, 5)); // 1
// OutputNums يعني دبا باش نوضحو الفكرة كتر, غنخدمو بداك ال
// outputNums ميمكنش ليه ياخذ قيمة من غير لي حددتيها فال a كيما كتشوف لتحت ف المتغير
let a = 0;
a = 1;
a = -1;
