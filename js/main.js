const firstName = document.getElementById("Fname");
const lastName = document.getElementById("Lname");
const radioInputs = document.getElementsByClassName ("QuerySelect");
const btnSubmit = document.getElementById("btnSubmit");
const checkBox = document.getElementById("Check");
let body = document.querySelector("body");
const titleDiv = document.getElementById("title");


let lastNameBoll = false;
let firstNameBoll = false ; 

function firstNameField() {
    const spanExists = firstName.parentElement.querySelector("span");
    const minLength = 3;

    if (firstName.value.length < minLength) {
        firstName.style.border = "2px solid #B82132"; 
        if (!spanExists) {
            const spanTag = document.createElement("span");
            spanTag.innerHTML = "First name should be 3";
            spanTag.style.color = "#B82132"; 
            spanTag.style.display = "block"
            firstName.parentElement.appendChild(spanTag);
        }
    } else {
        firstNameBoll = true ;
        firstName.style.border = "3px solid #6E8E59";
        if (spanExists) {
            spanExists.remove();
        }
    }
}

function lastNameField() {
    const spanExists = lastName.parentElement.querySelector("span");
    const minLength = 3;
    
    if (lastName.value.length < minLength) {
        lastName.style.border = "2px solid #B82132";
        if (!spanExists) {
            const spanTag = document.createElement("span");
            spanTag.innerHTML = " last name showd 3";
            spanTag.style.color = "#B82132" ;
            spanTag.style.display = "block"
            lastName.parentElement.appendChild(spanTag);
        }
    }else{
        lastNameBoll = true ; 
        lastName.style.border = "3px solid #6E8E59";
        if (spanExists) {
            spanExists.remove();
        }
    }
}


function submitFunc(event) {
    const spanTagExist = titleDiv.querySelector("span")
    let choese = false;

    for(let x of radioInputs){
        if (x.checked) {
            choese = true ;
            break;
        }
    }

    let checkBoxChoes = checkBox.checked ; 
    if (!choese || !lastNameBoll || !firstNameBoll || !checkBoxChoes) {
        event.preventDefault();
        if (!spanTagExist) {
            let spanTag = document.createElement("span");
            spanTag.style.color = " #B82132";
            spanTag.innerHTML = "Please fill in all required fields correctly." ;
            titleDiv.append(spanTag);
        }
    }else{
        if (spanTagExist) {
            spanTagExist.innerHTML = " form submited =)"
            spanTagExist.style.color = " #6E8E59";
        }else{
            let spanTag = document.createElement("p");
            spanTag.style.color = " #6E8E59";
            spanTag.innerHTML = "form submited =)" ;
            titleDiv.append(spanTag);
        }
        location.reload()
    }

}

btnSubmit.addEventListener("click" , submitFunc)
lastName.addEventListener("input" , lastNameField);
firstName.addEventListener("input", firstNameField);