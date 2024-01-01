"use strict";
/*
    Data types

        - Tuple
*/
// A tuple is a typed array with a pre-defined length and types for each index
// tuple are great because they allow each element in the array to be known type of value.
// فالمصفوفة index ديال كل type هي انك كتحدد مسبقا ال tuple كيما شتي الفوق ال
// error لتحت مغيخليكش وغيطلع ليك array article فحالة حاولتي تزيد على ال
let article;
article = [100, "Title One", true];
article.push(50);
console.log(article);
