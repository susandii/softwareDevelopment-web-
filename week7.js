let student = {
    "name" : "suzz",
    "age" : 24,
    "subjects" : ["SSP", "SD", "Webdev"]
};
//Simple JSON OBJECT

console.log(student.subjects[0]);
let students2 = JSON.stringify(student);
console.log(students2);
let students3 = JSON.parse(students2);
console.log(students3.name);

//create a JSON object
//give it a name,price,category and stock
//print the product name
//print the products name if the stock is greater than 0

//let product = {
//     "name" : "oreo",
//     "price" : 250,
//     "category" : "biscuits",
//     "stock" : 60
// }
// if (product.stock > 0){
//     console.log(product.name);
// }

// let settings = {
//     theme : "dark",
//     fontSize : "16px"
// };

// localStorage.setItem("usersettings", JSON.stringify(settings));

// let saved = 
// localStorage.getItem("usersettings");

// let saved = 
// localStorage.getItem("usersettings");
// console.log(JSON.parse(saved));

/*favourite item
1)create a small form with an input and a button "save food"
2) on button click
        -take input text
        -save into local storage as JSON array(array of food)
3)display all thr food from the local storage
*/

