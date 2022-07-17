// Constructor:
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Contsructor:
function Display(){

}

// Add Methods to display prototype:
Display.prototype.add = function(){
    return true;
}
Display.prototype.displayFromLocalStorage = function(){
    let itemReceives = localStorage.getItem("books");
    if(itemReceives == null){
        myArrayObj = [];
    }
    else{
        myArrayObj = JSON.parse(itemReceives);
    }
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = '';
    myArrayObj.forEach((element,index) => {
       let uiString = `<tr>
                        <th scope="row">${index+1}</th>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                        <td><button onclick= deleteBook(${index}) >Delete Note</button></td>
                    </tr>`;
    tableBody.innerHTML += uiString;
    });
}

Display.prototype.reset = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
Display.prototype.validate = function(book){
    if(book.name.length <= 2 || book.author.length <= 2){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.show = function(val,message){
    let alertMessage = document.getElementById("alert");
    alertMessage.innerHTML = ` <div class="alert alert-${val} alert-dismissible fade show" id="alertMessage" role="alert">
                                    <strong>${val}!!</strong> ${message}.
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
    setInterval(() => {
        alertMessage.innerHTML = '';
    }, 3000);
}

Display.prototype.storeToLocalStorage = function(book){
    let itemReceives = localStorage.getItem("books");
    if(itemReceives == null){
        myArrayObj = [];
    }
    else{
        myArrayObj = JSON.parse(itemReceives);

    }
    let myObj = {
        name : book.name,
        author : book.author,
        type : book.type
    }
    myArrayObj.push(myObj);
    localStorage.setItem("books",JSON.stringify(myArrayObj));
}

// Add submit event listener to form:
let libraryForm = document.getElementById("libraryForm");
let display = new Display();
console.log(display);

display.displayFromLocalStorage();
libraryForm.addEventListener("submit",libraryFormSubmited);
function libraryFormSubmited(e){
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    let type;
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    let novel = document.getElementById("novel");
    if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }
    else if(novel.checked){
        type = novel.value;
    }
    else{
        alert("Error");
    }
    
    let book = new Book(name,author,type);
    if(display.validate(book)){
        if(display.add(book)){
            display.storeToLocalStorage(book);
            display.displayFromLocalStorage();
            display.reset();
            display.show('success','Your Book Was Successfully Added');
        }
    }
    else{
        display.show('warning','Please Enter Proper Details!!!');
    }
    e.preventDefault();
}
function deleteBook(bookid){
    let itemReceives = localStorage.getItem("books");
    if(itemReceives == null){
        myArrayObj = [];
    }
    else{
        myArrayObj = JSON.parse(itemReceives);
    }
    myArrayObj.splice(bookid,1);
    localStorage.setItem("books",JSON.stringify(myArrayObj));
    display.displayFromLocalStorage();
    let alertMessage = document.getElementById("alert");
    alertMessage.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" id="alertMessage" role="alert">
                                    <strong>Message!!</strong> Book Has Been Successfully Deleted.
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
    setInterval(() => {
        alertMessage.innerHTML = '';
    }, 3000);
}
