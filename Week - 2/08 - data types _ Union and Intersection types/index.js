"use strict";
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
let varOne = "100";
varOne = 100;
function getActions(obj) {
    console.log(obj.one);
    console.log(obj.two);
    console.log(obj.three);
    console.log(obj.four);
    console.log(obj.five);
}
getActions({ one: "Hello", two: 200, three: true, four: 300, five: 400 });
