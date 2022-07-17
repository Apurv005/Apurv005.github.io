console.log("I'm In Script file");

// adding utility class:
function getElementFromString(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.firstElementChild;
}

// Initialize no of parameters:
let i = 0;

// Hide the ContentType And request Json if user select GET.
// let reqType = document.querySelector("input[name='radios']:checked").value;
let parameterBox = document.getElementById("parametersBox");
let paramsRadio = document.getElementById("paramsRadio");
let jsonRadio = document.getElementById("jsonRadio");
let jsonBox = document.getElementById("jsonBox");
let hideRadios = document.getElementById("hideRadios");
let getRadio = document.getElementById("getRadio");
let postRadio = document.getElementById("postRadio");

jsonBox.style.display = "none";
parameterBox.style.display = "none";
hideRadios.style.display = "none";

getRadio.addEventListener("click", () => {
    jsonBox.style.display = "none";
    parameterBox.style.display = "none";
    hideRadios.style.display = "none";
});
postRadio.addEventListener("click", () => {
    // Hide the parameterbox initially.
    jsonBox.style.display = "block";
    parameterBox.style.display = "none";
    hideRadios.style.display = "block";
});

// If user clicks on parms box, hide json box.
paramsRadio.addEventListener("click", () => {
    parameterBox.style.display = "block";
    jsonBox.style.display = "none";
});

// If user clicks on json box, hide param box. 
jsonRadio.addEventListener("click", () => {
    parameterBox.style.display = "none";
    jsonBox.style.display = "block";
});

// Add Custom Paramters:
let addparameters = document.getElementById("addparameters");
let addCustomParameter = document.getElementById("addCustomParameter");

addCustomParameter.addEventListener("click", () => {
    let htmlString = `<div class="row my-2">
                        <label for="parameterKey1" class="form-label col-md-2">Parameter${i + 2}:</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" placeholder="Enter Parameter${i + 2} Key" id="parameterKey${i + 2}"
                            aria-label="First name">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" placeholder="Enter Parameter${i + 2} Value"
                            aria-label="Last name" id="parameterValue${i + 2}">
                        </div>
                        <button class="btn btn-primary col-sm-2 deleteParam">-</button>
                    </div>`;
    let element = getElementFromString(htmlString);
    addparameters.appendChild(element);

    // Add event listener for delete the custom paramter:
    let deleteCustomParameter = document.getElementsByClassName(`deleteParam`);
    for (const iterator of deleteCustomParameter) {
        iterator.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
    }
    i++;
});

// If User click on submit button:
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    //Please Wait Message Displayed....
    document.getElementById("responseBox").value = "Please Wait... Fetching The Response...";

    // Fetch All the Details Which User Has Entered.
    let url = document.getElementById("urlField").value;
    let requestType = document.querySelector("input[name='radios']:checked").value;
    let contentType = document.querySelector("input[name='Contentradios']:checked").value;

    //If User has used params option instead of json, collect all the parameters in an object.
    let data = {};
    if (contentType == "parms") {
        for (let j = 0; j < i + 1; j++) {
            if (document.getElementById("parameterKey" + (j + 1)) != undefined) {
                let keys = document.getElementById("parameterKey" + (j + 1)).value;
                let values = document.getElementById("parameterValue" + (j + 1)).value;
                data[keys] = values;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById("jsonInputText").value;
    }

    // IF the request type is post iinvoke FetchAPI to create a post request.
    if (requestType == "GET") {
        fetch(url, {
            method: "GET",
        }).then(Response => Response.text())
            .then((text) => {
                let response = document.getElementById("responseBox");
                response.value = text;
            })
    }
    else {
        fetch(url, {
            method: "POST",
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(Response => Response.text())
            .then((text) => {
                let response = document.getElementById("responseBox");
                response.value = text;
            });
    }
});
