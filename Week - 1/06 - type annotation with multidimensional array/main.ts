/* ===========================================================
    Type Annotation with multidimensional arrays
==============================================================  */

let arrayOne: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayTwo: string[] = ["a", "b", "c"];
let arrayFour: (string | number)[] = ["a", "b", "c", 1, 2, 3];

/* multidimensional arrays */

// array inside of array هي ال multiD arrays ال
// ديالها data type هكا لي كنديرو باش نحددو نوع ال

let arrFive: (number | string[])[] = [1, 2, 3, ["a", "b", "c"]];

let arrSix: (string | number | (boolean | number[])[])[] = ["a", "c", "d", 1, 2, 3, 4, [true, false, [5, 6]]];