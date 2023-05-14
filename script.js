/* var button= document.getElementsByTagName("button")[0];

button.addEventListener("mouseenter", function(){
	console.log("mouseenter!!!");
}) */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");



function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		addDelButton(li);
		ul.appendChild(li);
		input.value = "";
 }

 // line through 

 ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}



function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
		lineThrough();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.which === 13){
		createListElement();
		lineThrough();
	}
	
}

function addDelButton(parent) {
var buttonElem = parent.appendChild(document.createElement("button"));
buttonElem.innerHTML = "Delete";
buttonElem.onclick = function() {
    this.parentElement.remove();
}}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// to find out the key number through event.which //
/*input.addEventListener("keypress", function(event){
	console.log(event.which)
})*/

