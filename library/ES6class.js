console.log("I'm In ES6 Classes");


class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
    storeToLocalStorage(book) {
        let itemReceives = localStorage.getItem("books");
        let myArrayObj;
        if (itemReceives == null) {
            myArrayObj = [];
        }
        else {
            myArrayObj = JSON.parse(itemReceives);
        }
        let myObj = {
            name: book.name,
            author: book.author,
            type: book.type
        }
        myArrayObj.push(myObj);
        localStorage.setItem("books", JSON.stringify(myArrayObj));
    }
    show(val, message) {
        let alertMessage = document.getElementById("alert");
        alertMessage.innerHTML = ` <div class="alert alert-${val} alert-dismissible fade show" id="alertMessage" role="alert">
                                        <strong>${val}!!</strong> ${message}.
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>`;
        setInterval(() => {
            alertMessage.innerHTML = '';
        }, 3000);
    }
    validate(book) {
        if (book.name.length <= 2 || book.author.length <= 2) {
            return false;
        }
        else {
            return true;
        }
    }
    reset() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }
    static displayFromLocalStorage() {
        let itemReceives = localStorage.getItem("books");
        let myArrayObj;
        if (itemReceives == null) {
            myArrayObj = [];
        }
        else {
            myArrayObj = JSON.parse(itemReceives);
        }
        let tableBody = document.getElementById("tableBody");
        tableBody.innerHTML = '';
        myArrayObj.forEach((element, index) => {
            let uiString = `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                        <td><button onclick= deleteBook(${index}) >Delete Note</button></td>
                    </tr>`;
            tableBody.innerHTML += uiString;
        });
    }
    add() {
        return true;
    }

}

let libraryForm = document.getElementById("libraryForm");
// display.displayFromLocalStorage();

libraryForm.addEventListener("submit", libraryFormSubmited);
function libraryFormSubmited(e) {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("bookAuthor").value;
    let type;
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    let novel = document.getElementById("novel");
    if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (novel.checked) {
        type = novel.value;
    }
    else {
        alert("Error");
    }

    let book = new Book(name, author, type);
    console.log(book);
    if (book.validate(book)) {
        if (book.add(book)) {
            book.storeToLocalStorage(book);
            // book.displayFromLocalStorage();
            Book.displayFromLocalStorage();
            book.reset();
            book.show('success', 'Your Book Was Successfully Added');
        }
    }
    else {
        book.show('warning', 'Please Enter Proper Details!!!');
    }
    e.preventDefault();
}
Book.displayFromLocalStorage();

function deleteBook(bookid){
    let itemReceives = localStorage.getItem("books");
    let myArrayObj;
    if(itemReceives == null){
        myArrayObj = [];
    }
    else{
        myArrayObj = JSON.parse(itemReceives);
    }
    myArrayObj.splice(bookid,1);
    localStorage.setItem("books",JSON.stringify(myArrayObj));
    Book.displayFromLocalStorage();
    let alertMessage = document.getElementById("alert");
    alertMessage.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" id="alertMessage" role="alert">
                                    <strong>Message!!</strong> Book Has Been Successfully Deleted.
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
    setInterval(() => {
        alertMessage.innerHTML = '';
    }, 3000);
}