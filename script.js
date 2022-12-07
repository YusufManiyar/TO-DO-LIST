let userinput = document.getElementById("userinput");
let enter = document.getElementById("enter");
let list = document.querySelector("ul");


function inputLength(){
    return userinput.value.length;
}

function createListElement(){
    let li = document.createElement("li");
    li.className = "list"
    li.appendChild(document.createTextNode(userinput.value));
    list.appendChild(li);
	userinput.value = "";

}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strike(event){
    if(event.target.tagName === "UL")
        return
    let className = event.target.className
    if(!className.includes("strike"))
        event.target.className += " strike"
    else
        event.target.className = "list"
    console.log(event.target.className)

}

enter.addEventListener("click", addListAfterClick);

userinput.addEventListener("keypress", addListAfterKeypress);
list.addEventListener("click",strike)