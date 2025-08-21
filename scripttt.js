document.getElementById("foodForm") = function(e){
    e.preventDefault();
}

let foodArray = [];
function savingfood(){
    let foodInput = document.getElementById("food").value
    foodArray.push(foodInput);
    localStorage.setItem("foodInput", JSON.stringify(foodArray));
    document.getElementById("output").innerHTML = JSON.parse(localStorage.getItem("foodInput"));
}
//stop the form from preloading
//e.preventdefault