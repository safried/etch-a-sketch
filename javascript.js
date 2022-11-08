const constantNum = 16;
//const container = document.querySelector(".gridContainer");
const cdiv = document.querySelector('.container');


//var divContainer = document.createElement("div");
//divContainer.id = "divContainer";
for (i = 0; i < constantNum; i++){
    let divChild = document.createElement("div");
    divChild.className = "divChild";
    //divChild.text = "#";
    //document.body.appendChild(divChild);
    cdiv.appendChild(divChild);
}
//document.body.appendChild(divContainer);

