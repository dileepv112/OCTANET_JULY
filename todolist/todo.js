let inputs = document.getElementById("input");
let text  = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    }else{
        let newle = document.createElement("ul");
        newle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newle);
        inputs.value = "";
        newle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newle.remove()
        }
    }
}