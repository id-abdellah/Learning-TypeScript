/* ===========================================================
    Type Annotation with arrays
==============================================================  */

// any data type دبا حنا عارفين بلي فاش كديكلاري بشي متغير مع
// فراه هو كيتسنا منك اي نوع دتا تايب
let varOne: any;

varOne = 100;
varOne = "string";
varOne = true;


/* -------------- */

// string or number or boolean data type يمكن لك تديكلاري بلي شي باغي من شي متغير يقبل
let varTwo: (string | number | boolean) = "mohamed";

varTwo = 100;
varTwo = true;


/* -------------- */


// string array دبا هنا صرحتي بلي هاد المتغير بغيتي فيه نوع
// error لدرتي فيها رقم واحد غيرجع strings. يعني مصفوفة فيها غا ال
let arrOne: string[] = ["hello", "mohamed", "mahmoud"];


// وهادي صرحتي بلي بغيتي فيها مصفوفة من الارقام فقط
let arrTwo: number[] = [1, 2, 3, 4, 5];


// فقط string or numbers or booleans وهادي صرحتي ليه بلي بغتي فيها مصفوفة من
// error غيرجع object يعني لدرتي معاهم
let arrThree: (number | string | boolean)[] = [1, 2, 3, "a", "b", "c", true, false];