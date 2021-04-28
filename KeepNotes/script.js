const addNoteBtn = document.getElementById("btn");

const updateLoacalStorageData = () =>{
    const textArea = document.querySelectorAll("textarea");
    const notes = [];
    console.log(textArea);
    textArea.forEach((note)=>{
        return notes.push(note.value);
    })  
    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNotes = (text = '') => {
    const note = document.createElement('div');
    note.classList.add("noteDiv");

    const htmlData = `
    <div class="note">
    <div class="icons">
        <div class="iconPosition">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>
    <div class="main ${text ? "" : 'hidden'} "></div>
    <textarea class="${text ? "hidden" : ''}" ></textarea>
    </div>  `;
    note.insertAdjacentHTML("afterbegin",htmlData);
    const editButton = note.querySelector(".edit");
    const delButton = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    // Deleting The Note:
    delButton.addEventListener("click",()=>{
        note.remove();
        updateLoacalStorageData();
    });
    // toggle using edit button:
    textArea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener("click",() =>{
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });
    textArea.addEventListener('change',(event)=>{
        const value = event.target.value;
        mainDiv.innerHTML = value;
        updateLoacalStorageData();

    })


    document.body.appendChild(note);//it appends the node as last child of a node.
}

// getting data back from local Storage....
const notes = JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach((note)=>addNewNotes(note));
}

addNoteBtn.addEventListener("click", () => addNewNotes());