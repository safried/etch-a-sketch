const constantNum = 256;
const containerDiv = document.querySelector('.container');

for (i = 0; i < constantNum; i++){
    let divChild = document.createElement("div");
    divChild.className = "divChild";
    divChild.addEventListener("mouseover", ()=>{
        divChild.style.backgroundColor = "green";
    });
    divChild.addEventListener("mouseout", ()=>{
        divChild.style.backgroundColor = "purple";
    })
    containerDiv.appendChild(divChild);
}

