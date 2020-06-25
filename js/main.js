let addCollBtn = document.querySelector(".addCollBtn");
let trTable = document.querySelectorAll(".trTable");


addCollBtn.addEventListener("click" , addColl);

function addColl(){
    let i;
    // trTable.innerHTML += `<td>آبی</td>`

    console.log("mbmnvjh")
    for (i = 0 ; i < trTable.length ; i++) {
        trTable[i].innerHTML += `<td class="newCol">***</td>`
    }
}