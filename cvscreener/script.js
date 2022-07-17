console.log("Cv Screener Application");
// Random Api for Image: https://randomuser.me/api/portraits/men/73.jpg
const userProfiles = [
    {
        id: 1,
        name : "Tanisha Patel",
        age : 10,
        city : "Vijapur",
        language : "English",
        framework : "EnglishCT",
        image : "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
        id: 2,
        name : "Apurv Patel",
        age : 20,
        city : "Vijapur",
        language : "JavaScript",
        framework : "React",
        image : "https://randomuser.me/api/portraits/men/74.jpg",
    },
    {
        id: 3,
        name : "Dhrumal Patel",
        age : 20,
        city : "Gandhinagar",
        language : "Python",
        framework : "Django",
        image : "https://randomuser.me/api/portraits/women/66.jpg",
    },
    {
        id: 4,
        name : "Hetsi Patel",
        age : 18,
        city : "Ahmedabad",
        language : "Sql",
        framework : "NoSql",
        image : "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
        id: 5,
        name : "Priyansh Savani",
        age : 20,
        city : "Ahmedabad",
        language : "Python",
        framework : "Flask",
        image : "https://randomuser.me/api/portraits/men/34.jpg",
    }
];

function cvIterator(profiles){
    let nextIndex = -1;
    return { 
        next : function(receiver){
            if(receiver == true){
                return nextIndex++ < profiles.length ? {value : profiles[nextIndex],done:false } : {done:true};
            }
            else{
                return nextIndex-- > 0 ?  {value : profiles[nextIndex],done: false} : {done:true};
            }
        }
    };
}
let candidate = cvIterator(userProfiles);
let currentCandidate;
let backBtn = document.getElementById("backBtn");
backBtn.style.display = "none";
let nextBtn = document.getElementById("nextBtn");
nextCVDisplay(true);
nextBtn.addEventListener("click",nextCV);
function nextCV() {
    nextCVDisplay(true);
    backBtn.style.display = "block";
}
backBtn.addEventListener("click",backCV);
function backCV(){
    nextCVDisplay(false);
}
// ()=>{
//     currentCandidate = candidate.next(false).value;
//     console.log(currentCandidate);
// })

function nextCVDisplay(res){
    currentCandidate = candidate.next(res).value;
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if(currentCandidate != undefined){
        image.innerHTML = `<img src="${currentCandidate.image}" alt='Image Not Available'>`;
        profile.innerHTML = `<ul class="list-group ">
                                <li class="list-group-item ">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item ">Age: ${currentCandidate.age}</li>
                                <li class="list-group-item ">City: ${currentCandidate.city}</li>
                                <li class="list-group-item ">Programming Language: ${currentCandidate.language}</li>
                                <li class="list-group-item ">Framework: ${currentCandidate.framework}</li>
                            </ul>`;
        if(currentCandidate.id == 1){
            backBtn.style.display = "none";
            nextBtn.style.display = "block";
        }
        else{
            nextBtn.style.display = "block";
            backBtn.style.display = "block";
        }
        inHr.style.display = "block";
    }
    else{
        let inHr = document.getElementById("inHr");
        image.innerHTML = ""
        profile.innerHTML = `<h1>All Candidates Were ShorteListed!!!</h1>`;
        inHr.style.display = "none";
        nextBtn.style.display = "none";
    }
}