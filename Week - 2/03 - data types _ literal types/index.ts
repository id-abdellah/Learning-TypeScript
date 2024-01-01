/*
    Data types

        - literal types
*/

// خاص بيك type هي مثلا انك كدير literal types ال


// function دبا مثلا عندنا هاد ال
// ولي كدير مقارنة بين جوج ارقم
// ميمكنش ليها ترجع الا ثلاث قيم يما واحد او زيرو اولا ناقص واحد function دبا هاد ال
// خاص type هاد المخرجات تقد دير ك

type OutputNums = 0 | 1 | -1;

function compare(num1: number, num2: number): OutputNums {
    if (num1 === num2) {
        return 0
    } else if (num1 > num2) {
        return 1
    } else {
        return -1
    }
}

console.log(compare(10, 10)); // 0
console.log(compare(10, 20)); // -1
console.log(compare(10, 5)); // 1


// OutputNums يعني دبا باش نوضحو الفكرة كتر, غنخدمو بداك ال
// outputNums ميمكنش ليه ياخذ قيمة من غير لي حددتيها فال a كيما كتشوف لتحت ف المتغير

let a: OutputNums = 0;
a = 1;
a = -1;