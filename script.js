let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul"); // Fixed the typo
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`; // Used backticks for template literal
        text.appendChild(newEle);
		inputs.value="";
		newEle.querySelector("i").addEventListener("click",remove); //for removing the tasks
		function remove(){
			 newEle.remove()
			 
		
		}
	}
	
}


				 
		
			