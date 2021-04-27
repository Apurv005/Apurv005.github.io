/* On Load
 1.) Assign colors to boxes
 2.) each color twice
 3.) 4*4 = 16 boxes
 4.) SO: 8 colors
 5.) Colors are hidden initially..
 6.) color should reveal on click
 7.) When User clicks 2 boxes:
    7.1) After user clicks on 2 boxes and colors are different they should hide again..
    7.2) After user clicks on 2 boxes and colors are same they should FREEZE.
 */

const colors = ['#0099e5','#ff4c45','#34bf49','#be0027','#cf8d2e','#ffdd88','#511324','#6a4567',
                '#0099e5','#ff4c45','#34bf49','#be0027','#cf8d2e','#ffdd88','#511324','#6a4567'];
const boxes = document.getElementsByClassName("box");
const boxesLen = boxes.length;
let clickedBoxes = [];

const addId = (i) => boxes[i].id = 'boxes'+i;

const assignColors = (i) => boxes[i].style.background = colors[i];

const randomizeColor = (i) => boxes[i].style.order = parseInt(Math.random() * boxesLen);

const resetClickedArray = () => {
        clickedBoxes = [];
        console.log("Array reset");
    };
function hideBoxesAfterSomeTime(objectOfBox1,objectOfBox2){
    setTimeout(function(){
        objectOfBox1.classList.add('hidden');
        objectOfBox2.classList.add('hidden');
    },200)
}
function freezeBoxes(objectOfBox1,objectOfBox2){
    objectOfBox1.classList.add('freeze');
    objectOfBox2.classList.add('freeze');
}
function checkIfGameFinished(){
    var frizzenBox = document.querySelectorAll('.box.freeze');
    if(frizzenBox.length == boxesLen){
        alert("Yeh! You Won Game");
        window.location.reload();
    }

}

function checkClickedBoxes(i){
    if(clickedBoxes.length == 2){
        var id1 = clickedBoxes[0];
        var id2 = clickedBoxes[1];
        var objectOfBox1 = document.getElementById(id1);
        var objectOfBox2 = document.getElementById(id2);
        // IF SAME CLICKED...
        if(objectOfBox1.style.background == objectOfBox2.style.background){
            freezeBoxes(objectOfBox1,objectOfBox2);
        }
        // IF DIFFERENT CLICKED...
        else{
            console.log("different clicked");
            hideBoxesAfterSomeTime(objectOfBox1,objectOfBox2);
            
        }
        resetClickedArray();
        checkIfGameFinished();
    }
}
function handleClick(i){
    boxes[i].addEventListener("click",function(){
        var clickedBox = this;
        if(clickedBox.classList.contains("freeze") == false){
            clickedBoxes.push(clickedBox.id);
            checkClickedBoxes();
            clickedBox.classList.remove("hidden");
        }
    });
}

const timer = () =>{
    const startTime = 2;
    const countDowm = document.querySelector(".timer");
    countDowm.innerHTML = `${startTime}:00`;
    let time = startTime * 60;
    let int = setInterval(() => {
        time--;
        const min = Math.floor(time/60);
        let second = time % 60;
        countDowm.innerHTML = `${min}:${second}`;
        
        if(min == 0 && second == 0){
            clearInterval(int);
            alert("You Lost The Game... Please Play Again..");
            init();
        }
    }, 1000);
}
function init() {
    let yConfirm = confirm("Welcome....! You Have 2 Minnutes For Complete The Game...");
    if(yConfirm == true){
        timer();
        for(let i=0; i<boxesLen; i++){
            addId(i);
            assignColors(i);
            randomizeColor(i);
            handleClick(i);
        }
    }
    else{
        alert("bye...! Have A good day....");
    }
    
}
init();