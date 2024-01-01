/*
    Data type

        - type Alias
*/


// syntax كيتكتب بهاد ال type annotation دبا حنا عارفين ان ال

let test: string = "somethind";
let arr: (boolean | number)[] = [1, 2, 3, true];

// المتداخلة arrays امر صعب كل مرة خصوصا فحالا ال types ولكن تقد مثلا تكون معكاز وتجيك كتابة ال
// ودير ليه اختصار وتبقا تخدم بداك الاختصار type ولي كتخليك تكتب type alias لهاذا كاينة فكرة ال

type st = string;
type num = number;
type st_num = string | number;
type numsArr = number[];
type multiDArr = (number | string | boolean[])[];

let a: st = "mohamed";
let b: num = 200;
let c: st_num = "go to the bed";
c = 300;
let d: numsArr = [1, 2, 3, 4, 5];
let e: multiDArr = [1, 2, 3, "a", "b", [true, false]];