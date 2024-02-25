const characterSets = {
    letters : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers : '0123456789',
    symbols : '!#$%&()*+'
}
const passwordBtn = document.getElementById("password-btn")
const passwordEl = document.getElementById("password-el")
const websiteEl = document.getElementById("website-el")
const addBtn = document.getElementById("add-btn")
const searchBtn = document.getElementById("search-btn")
const lengthOfPassword = 12;
const password = generatePassword(lengthOfPassword)
const passwordFromlocalStorage = JSON.parse(localStorage.getItem("savedPasswords"));

if(passwordFromlocalStorage){
    addPassword(password)
}

function searchPassword(website){
    if(typeof(Storage) !== "undefined"){
        const savedPasswords = JSON.parse(localStorage.getItem("savePassword")) || {}
        if(savedPasswords.hasOwnProperty(website)){
            return savedPasswords[website];
        }
        else{
            return alert("Password not found for this password!")
        }
    }
    else{
        alert("local storage not supported.")
    }
}

function addPassword(website, password){
    if(typeof(Storage) !== "undefined"){
        let savedPasswords = JSON.parse(localStorage.getItem("savePassword")) || {}
        savedPasswords[website] = password

        localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords))

    }
    else{
        alert("local storage not supported.")
    }

}

function generatePassword(length){
    let password = ''
    const upperCaseLetters = characterSets.letters[Math.floor(Math.random() * 26) + 26]
    const lowerCaseLetters = characterSets.letters[Math.floor(Math.random() * 26)]
    const symbols = characterSets.symbols[Math.floor(Math.random() * characterSets.symbols.length)]
    password = upperCaseLetters + lowerCaseLetters + symbols

    for(let i = 0; i < length - 3; i++){
        let categoryIndex = Math.floor(Math.random() * 3)
        switch(categoryIndex){
            case 0:
                password += characterSets.letters[Math.floor(Math.random() * characterSets.letters.length)]
                break;
            case 1:
                password += characterSets.numbers[Math.floor(Math.random() * characterSets.numbers.length)]
                break;
            case 2:
                password += characterSets.symbols[Math.floor(Math.random() * characterSets.symbols.length)]
                break;
        }
    }
    password = password.split('').sort(()=> Math.random() - 0.5).join('')

    return password;
}

searchBtn.addEventListener('click', function(){
    const foundPassword = searchPassword(websiteEl.value)
})
addBtn.addEventListener('click', function(){
    addPassword(websiteEl.value, password)
    websiteEl.value = ""
    passwordEl.value = ""
})
passwordBtn.addEventListener('click', function(){
    generatePassword(lengthOfPassword)
    passwordEl.value = password
})

// function generatePasswordSwitch(length){
//     const characterSets = { 
//         letters : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
//         'q', 'r', 's', 't', 'u', 'v', 'w',
//          'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//           'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

//         numbers : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//         symbols : ['!', '#', '$', '%', '&', '(', ')', '*', '+']
    
//     }
//     let pass = " "
//      for(i= 0; i < length; i++){
//         let categoryIndex = Math.floor(Math.random() * 2)
//         switch(categoryIndex){
//             case 0:
//                 pass += characterSets.letters[Math.floor(Math.random() * characterSets.letters.length)]
//                 break;
//             case 1:
//                 pass += characterSets.numbers[Math.floor(Math.random() * characterSets.numbers.length)]
//                 break;
//             case 2:
//                 pass += characterSets.symbols[Math.floor(Math.random() * characterSets.symbols.length)]
//                 break;
//     }
//     return pass
// }
// }


