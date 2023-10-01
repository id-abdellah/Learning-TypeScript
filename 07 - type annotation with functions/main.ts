/* ===========================================================
    Type Annotation with Functions

    
        - noImplicitAny

        - noImplicitReturns
            -- will check all code path in a function to ensure they return a value

        - noUnusedLocals
            -- report errors on unused local variable

        - noUnusedParameters
            -- report errors on unused parameters in function
==============================================================  */


/*
    noImplicitAny

    فشي بارام دفانكشن any ملي يلقا error باش ميعطيكش config.ts خاص نتا تفعلو بنفسك فال option هو
    وهادشي لي كنتعلموه دبا data type فالاصل راه كدمر فكرة تحديد any data type دبا راه ال
    func param ف any كترجع ايرور بلي لقا ts فهاد الفانكشن لتحت, قبل منفعلو هاد الاوبشن فراه ال
    error فاش غنفعلوه مغاديش يرجع داك ال
*/

/* 
    فراه يمكن ليه استنتجهم من الاستخدام ديالك ليهم params data type الا محددتيش
*/

let showMsg = true;

function showDetails(name: string, age: number, salary: number): string /* لي بغيتي الفانكشن تردو input هدا هو نوع ال */ {
    /*
        noUnusedParameter
        اوبشن الا فعلتيه, كينبهك ان عندك باراميتر ولكن مستعملتيهش
    */
    /*
        noUnusedLocals
        هاد الاوبشن الا فعلتيه, الوظيفة ديالو انه انبهك بانك صرحتي بشي متغير ولكن مستعملتيهش
    */
    let test = 20;

    if (showMsg) {
        return `hello ${name}, age is ${age}, salary is ${salary}, test ${test}`
    }

    /*
        noImplicitReturns

        دبا فهاد الفانكشن لمتحققش داك الشرط, فالفانكشن مغترجع والو حيت نتا مقلتيش ليها شنو غترجع الا متحققش
        فالفانكشن كينبهك return لهذا هاد الاوبشن الا فعلتيه الا ملقاش
    */

    return "undefined"
}



// غينبهك عليها param فحالة مدرتيش شي
console.log(showDetails("mohamed", 20, 5000))