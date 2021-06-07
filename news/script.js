//Api key: 8860cb91793c48d9b6fb1f6cf7b3d6f4
// Api Key : https://newsapi.org/v2/top-headlines?country=in&apiKey=8860cb91793c48d9b6fb1f6cf7b3d6f4

// Initialize a news api 
let newsContainer = document.getElementById("newsContainer");

let country = "in";
let apiKey = "8860cb91793c48d9b6fb1f6cf7b3d6f4";
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let newsCard = '';
        json.articles.forEach((element,index) => {
            if (element.title != null && element.content != null) {
                newsCard += `<div class="card my-3 mx-3" id="newsCardShow${index}" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">Date: ${element.publishedAt}</p>
                            <hr>
                            <p class="card-text">${element.content}</p>
                            <a href="${element.url}" class="link-success" target="blank">Read More</a>
                        </div>
                    </div>`;
            }
            newsContainer.innerHTML = newsCard;
        });

        let searchBtn = document.getElementById("searchBtn");
        searchBtn.addEventListener("click", searchFun);
        function searchFun() {
            let searchTxt = document.getElementById("searchTxt");
            let searchInputText = searchTxt.value;
            json.articles.forEach((element,index) => {
                if (element.title != null && element.content != null) {
                    let newsCardShow = document.getElementById(`newsCardShow${index}`);
                    if(element["content"].includes(searchInputText)){
                        newsCardShow.style.display = "block";
                    }
                    else{
                        newsCardShow.style.display = "none";
                    }
                }
            });
        }
    }
    else {
        newsCard.innerHTML = `Some Error Has Been Occured!!! Please Try Again Later...`;
    }

    let footer = document.getElementById("footer");
    footer.innerHTML = `<span class="border border-primary">
                            <p class="text-center fs-4 text-white">Developed By: Apurv Patel</p>
                        </span>`;
}
xhr.send();