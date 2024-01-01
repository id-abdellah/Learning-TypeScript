/* ===========================================================
    Type Annotation || signature
    
        - indicate the data type of variables
        - indicate the data type of function input/output
        - objects, etc.

    
    Why we use it?
    Is it mandatory?
    What happen if we didn't use it?
==============================================================  */

// كتستنتج نوع الداتا ديالو من القيمة typescript دبا الا ديكلاريتي بشي متغير بلا متحدد نوع ديالو فراه
// يمكن ليك من بعد تبدل القيمة ولكن ميمكنش ليك تبدل نوع الداتا data type انفوا كتحدد ال

// any كتخلي نوع ديالو ts اما الا ديكلاريتي بشي متغير بلا نوع داتا و بلا قيمة فراه
// يعني انه كيتسنا منك اي نوع داتا تايب any ال


// التالي syntax لشي متغير كدير ال data type باش تحدد

let theName: string = "Mohamed";
let theAge: number = 20;
let hire: boolean = false;
let shool: any;



/*
    why we use it ?
    type checking لعملية ال force باش نديرو

    is it mandatory?
    غيستنتجها من القيمة ديالو compiler لا ماشي اجباري. حيت وخا متحدد نوع الداتا. ال
*/


/*
    typescript data type ولي هي اول any data type و بالنسبة لل
    فهي كتقبل اي نوع داتا. يعني تقد تبدل فالنوع ديال البيانات
*/

let anything: any = "hllo";
anything = 200;
anything = "hello";

/* --------------- */

function add(n1: number, n2: number): number {
    return n1 + n2
}

// any خاص تحدد شمن نوع بيانات غدخل. اولا غيحط input نفس الحاجة بالنسبة للفانكشنز