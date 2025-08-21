  // document.getElementById('myinput').addEventListener('keyup', function() {
  // document.getElementById("output").innerHTML = this.value;
//});

//This refers to the element that recieves the event, in this case, its the input.
//therefore, when the event is triggered by the input, the output paragraphs value is changed to the inputs value.

document.getElementById("box").addEventListener('mouseover', function(){
    this.style.background = "green";
});
document.getElementById("box").addEventListener('mouseout',function(){
    this.style.background = "blue";
})

//that makes it zoom in and out when hovered
//and go back to normal when mouse out


document.getElementById('myinput').addEventListener('keyup', function() {
    document.getElementById("output").innerHTML = this.value;
});

//the color of the text when u double click it
document.getElementById("text").addEventListener("dblclick", function(){
    this.style.color = "red";
    this.style.backgroundcolor = "blue";
})

//shows the heart emoji when u double click a paragraph
document.getElementById("mypara").ondblclick = function() {
    this.innerHTML = "❤️";
};

document.getElementById("email").addEventListener("focus", function(){
    this.style.border = "2px solid blue";
})

document.getElementById("email").addEventListener("blur", function(){
    this.style.border = "4px solid gray";
})
