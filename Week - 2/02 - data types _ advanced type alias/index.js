"use strict";
/*
    Data types

        - Advances type alias
*/
function getActions(sm) {
    console.log(`the value of name is: ${sm.name}`);
    console.log(`the value of lastName is: ${sm.lastName}`);
    console.log(`the value of country is: ${sm.country}`);
    console.log(`the value of age is: ${sm.age}`);
    console.log(`the value of city is: ${sm.city}`);
    console.log(`the value of employee is: ${sm.employee}`);
}
getActions({
    name: "mohamed",
    lastName: "id-abdellah",
    country: "morocco",
    age: 20,
    city: "layyoune city",
    employee: false
});
/*
    Output

    the value of name is: mohamed
    the value of lastName is: id-abdellah
    the value of country is: morocco
    the value of age is: 20
    the value of city is: layyoune city
    the value of employee is: false
*/ 
