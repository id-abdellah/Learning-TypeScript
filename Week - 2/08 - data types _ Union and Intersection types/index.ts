/*
    Data types

        - Union and Intersection type

        - Union type
            - The " | " symbole is used to creat the union => "or"
        
        - Intersection type
            - i a type that combines several types into one
            - the "&" symbole is used to creat intersection => "and"
*/


// Union Type دبا هدا هو لي كيتسما
let varOne: number | string = "100";
varOne = 100;





// ف هو لي كنا درنا فالدرس التاني من هاد الاسبوع intersection type اما بالنسبة لل

type A = {
    one: string,
    two: number,
    three: boolean
}

type B = {
    four: number,
    five: number
}
// intersection type هدا هو لي كيتسما بال
type Mix = A & B;

function getActions(obj: Mix) {
    console.log(obj.one)
    console.log(obj.two)
    console.log(obj.three)
    console.log(obj.four)
    console.log(obj.five)
}

getActions({ one: "Hello", two: 200, three: true, four: 300, five: 400 })