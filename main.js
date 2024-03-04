'use strict'
const characterSets = {
    letters : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers : '0123456789',
    symbols : '!#$%&()*+'
}
const passwordBtn = document.getElementById("password-btn");
const passwordEl = document.getElementById("password-el");
const websiteEl = document.getElementById("website-el");
const addBtn = document.getElementById("add-btn");
const searchBtn = document.getElementById("search-btn");
const lengthOfPassword = 12;
let savedPasswords = JSON.parse(localStorage.getItem("savePasswords")) || {};
const host = window.location.host;
websiteEl.value = host;

function searchPassword(website){
    if(typeof(Storage) !== "undefined"){
        const savedPasswords = JSON.parse(localStorage.getItem("savePassword"));
        if(savedPasswords.hasOwnProperty[website]){
            return savedPasswords[website];
        }
        else{
             alert("Password not found for this website!");
        }
    }
    else{
        alert("local storage not supported.");
    }
    
}
addBtn.addEventListener('click', function(){
    const password = generatePassword(lengthOfPassword);
    addPassword(websiteEl.value, password);
    websiteEl.value = "";
    passwordEl.value = "";

})

function addPassword(website, password){
    if(typeof(Storage) !== "undefined"){
        let keys = Object.keys(savedPasswords).map(key => key.toLowerCase())
        let lowerCaseWebsite = website.toLowerCase();
        if(!keys.includes(lowerCaseWebsite)){
             savedPasswords[website] = password
             localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));
        }
        else{
            alert("webiste already has a password.");
        }

    }
    else{
    }
        alert("local storage not supported.");

}

const generatePassword = function(length){
    let password = ''
    const upperCaseLetters = characterSets.letters[Math.floor(Math.random() * 26) + 26]
    const lowerCaseLetters = characterSets.letters[Math.floor(Math.random() * 26)]
    const symbols = characterSets.symbols[Math.floor(Math.random() * characterSets.symbols.length)]
    password = upperCaseLetters + lowerCaseLetters + symbols

    for(let i = 0; i < length - 3; i++){
        let categoryIndex = Math.floor(Math.random() * 3)
        switch(categoryIndex){
            case 0:
                password += characterSets.letters[Math.floor(Math.random() * characterSets.letters.length)];
                break;
            case 1:
                password += characterSets.numbers[Math.floor(Math.random() * characterSets.numbers.length)];
                break;
            case 2:
                password += characterSets.symbols[Math.floor(Math.random() * characterSets.symbols.length)];
                break;
        }
    }
    password = password.split('').sort(()=> Math.random() - 0.5).join('')

    return password;
}

searchBtn.addEventListener('click', function(){
    const foundPassword = searchPassword(websiteEl.value);
    passwordEl.value = foundPassword;
})

passwordBtn.addEventListener('click', function(){
   const password = generatePassword(lengthOfPassword);
    passwordEl.value = password;
})



