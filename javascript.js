const constantNum = 256;
const cdiv = document.querySelector('.container');

for (i = 0; i < constantNum; i++){
    let divChild = document.createElement("div");
    divChild.className = "divChild";
    cdiv.appendChild(divChild);
}

