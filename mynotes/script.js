console.log("Welcome to Notes Applicaiton Using JavaScript");

let notesElem = document.getElementById("notes");
let alertBox = document.getElementById("alertMessage");
alertBox.style.display = "none";

// If user adds notes then add to the localstorage....
let addNoteBtn = document.getElementById("addBtn");
addNoteBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("titleTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        addTitle: addTitle.value,
        addText: addTxt.value,
    }
    if (myObj.addTitle != "" && myObj.addText != "") {
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = '';
        titleTxt.value = '';
        showNotes();
    } else {
        alertBox.style.display = "block";
    }
});
// Show the notes to the User.....
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach((element, index) => {
        html += ` 
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.addTitle}</h5>
                <p class="card-text">${element.addText}</p>
                <button id="btnDelete" onclick=deleteNote(${index}) class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });

    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `Your Notes Are Empty! Please Add Some Notes....`;
    }
}
showNotes();
// for deleting the note....
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// for searching the notes.....
let hide = document.getElementById("hide");
let textSearch = document.getElementById("textSearch");
let btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function (e) {
    let inputText = textSearch.value;
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach((element) => {
        let cardTxt = element.getElementsByTagName("p")[0];
        let cardTxtvalue = cardTxt.innerText;
        if (cardTxtvalue.includes(inputText)) {
            element.style.display = "block";
            textSearch.value = '';
        }
        else {
            element.style.display = "none";
            textSearch.value = '';
        }
    });
    e.preventDefault();
});
