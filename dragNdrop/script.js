console.log("I'm In JavaScript");
let imgBox = document.getElementsByClassName("imgBox")[0];
console.log(imgBox);
let whiteBox = document.getElementsByClassName("whiteBox");

// Event Listeners for draggable element imgBox.
imgBox.addEventListener("dragstart", (e)=>{
    e.target.className += " hold";
    setTimeout(() => {
        e.target.className = " hide";
        console.log("DragGIdeed :", imgBox);
    }, 0);
    console.log("DragStart:", imgBox);
});

imgBox.addEventListener("dragend", (e)=>{
    console.log("Drag Ended");
    e.target.className = "imgBox";
    console.log("DragEnd:", imgBox);
});

for (const iterator of whiteBox) {
    iterator.addEventListener("dragover",(e)=>{
        e.preventDefault(); 
        console.log("Drag Overed");
        console.log("Drag Over",imgBox);
    });
    iterator.addEventListener("dragenter",(e)=>{
        console.log("Drag Enterd");
        e.target.className += " dashed";
        console.log("Drag Enter",imgBox);
    });
    iterator.addEventListener("dragleave",(e)=>{
        console.log("Drag Leaved");
        e.target.className = "whiteBox";
        console.log("Drag Leaved",imgBox);
    });
    iterator.addEventListener("drop",(e)=>{
        console.log("Droped");
        e.target.append(imgBox);
        // e.target.className = "hide";
        console.log("Droped",imgBox);
    }); 
}