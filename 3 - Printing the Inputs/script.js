//3. Create a form with input fields and a submit button. Use Javascript to validate the form and display an error message if the input is invalid.

//Jab bhi forms ke sath deal karo yaad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai ke pages reload na ho, nahito agar page reload hua to js nahi chalegi, kyuki js chal paaye se pehle hi page reload ho chuka hoga

//Form ko reload karne se rokne ke liye

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    for(var i = 0; i<inps.length; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = "Error, Some fields are missing";
            h4.style.color = "red";
            break;
        }
    }
    console.log(inps.value);
})