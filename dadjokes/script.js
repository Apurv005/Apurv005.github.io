{
    /* <button id="jokeBtn" class="btn">Next JOKE</button> */
    /* <div id="joke" class="joke">Awesome Joke is loading...</div> */
    // GET https://icanhazdadjoke.com/
}

// Promises.....
//  Here promise means work completed or not.
//  Promise returns only 3 value... Fulfilled OR Rejected OR onGoing...
//  90% we only use the promises 10% create the promises...
// Fatch API means fetch() returns the promises..

const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

//using Promises...
// const generateJokes = () =>{

// const setHeaders = {
//     headers:{
//         accept : "application/json"
//     }
// }


// fetch("https://icanhazdadjoke.com/",setHeaders)
// .then((res)=>res.json()
// ).then((data)=>{
//     joke.innerHTML = data.joke;
//     joke.style.fontSize = "25px";
// })
// .catch((error)=>{
//     console.log(error);
// })

// }
// jokeBtn.addEventListener("click",generateJokes);
// generateJokes();

// Using Async-Await....

// async function generateJokes(){
// }

const generateJokes = async () => {
    try {
        const setHeaders = {
            headers: {
                accept: "application/json"
            }
        }

        const res = await fetch("https://icanhazdadjoke.com/", setHeaders);
        const data = await res.json();
        joke.innerHTML = data.joke;
        joke.style.fontSize = "25px";
    }
    catch (err) {
        alert(err);
    }





    // .then((res) => res.json()
    // ).then((data) => {
    //     joke.innerHTML = data.joke;
    //     joke.style.fontSize = "25px";
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
}
jokeBtn.addEventListener("click", generateJokes);
generateJokes();


