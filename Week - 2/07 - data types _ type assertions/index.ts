/*
    Data types

        - Type Assertions

        Sometimes the compiler does not know the informations that we do
        TypeScript is not performing any check to make sure type assertion is valid
*/


// error دبا هنا حنا عارفين بلي هادا عنصر ديال صورة ولكن فاش كنجيو نجيبو المصدر ديالها كيطلع لينا
// ولكن خاصك تحدد ليه النوع ديالو HTMLElement عارف بلي هادا compiler وتا ال
// html img element ان هاه راه عنصر compiler باش نحلو هاد المشكل خاصنا نعلمو ال

// as keyword يما عن طريق ال
let myImg = document.querySelector("#myImage") as HTMLImageElement;
let myImgSrc = myImg.src;

// غنتعلموها من بعد interface اولا شي حاجة كتسما ال
let myImg2 = <HTMLImageElement>document.querySelector("#myImage");
let myImg2Src = myImg.src;

// واحد الحاجة مهمة اخرا
// value من ديك الصورة, وحنا عارفين بلي الصور معندهاش value وهي انك مثلا جيت بغيتي تجبد ال
// error اذن غيطلع ليك


/* =============== */

// دبا هدا مثال اخر
// assertion اخر من بعد مكتحدد نتا ال check مكديرش اي typescript ولي كيوضح ان ال
// function ماشي reapeat للكود عاد غيقولك بلي ال run هنا مغيبانش ليك الخطاء حتا دير

let data: any = 1000;
console.log((data as string).repeat(10))






// docs مفهمتاش مزيان ولكن غنمشي انشاء الله لل type assertion المهم هاد الجزئية ديال ال