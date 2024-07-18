const numbers = '0123456789';
const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#$%^&*()-+_=|?;:<>';
const lenBox = document.querySelector('#length');
const copyBtn = document.querySelector("#copy");
const output = document.querySelector(".pass");
const submit = document.querySelector(".submit");
const slider = document.querySelector("#slider");
const checkbox1 = document.querySelector("#low");
const checkbox2 = document.querySelector("#upp");
const checkbox3 = document.querySelector("#num");
const checkbox4 = document.querySelector("#sym");

let length;
let finalPass='';
let password;


slider.addEventListener("input", getLength);
submit.addEventListener("click", genPass);

function getLength() {
    length = slider.value;
    lenBox.innerText = length;
}

function genPass() {
    
    length = slider.value;
    lenBox.innerText = length;
    
    password = '';
    let elements = '';
    let count=0;
    
    if (checkbox1.checked === false && checkbox2.checked === false && checkbox3.checked === false && checkbox4.checked === false) {
        alert("Tick at least one box.");
    }
    if (checkbox1.checked){
        elements += lowerAlpha;
        count++; 
    }
    if (checkbox2.checked) {
        elements += upperAlpha; 
        count++; 
    }
    if (checkbox3.checked) {
        elements += numbers; 
        count++;
    }
    if (checkbox4.checked) {
        elements += symbols;
        count++;
    }


    for (let i = 0; i < length-count; i++) {
        password += elements.charAt(Math.floor(Math.random() * elements.length));
    }
    
    // making sure the required character is there and is not totally a game of luck

    if (checkbox1.checked) password += lowerAlpha[Math.floor(Math.random() * 26)];
    if (checkbox2.checked) password += upperAlpha[Math.floor(Math.random() * 26)];
    if (checkbox3.checked) password += numbers[Math.floor(Math.random() * 10)]; 
    if (checkbox4.checked) password += symbols[Math.floor(Math.random() * 20)];
    
    // randomising there positions 
    
    pass=password.toString();
    for (let j = 0; j < length; j++) {
        if (checkbox1.checked === false && checkbox2.checked === false && checkbox3.checked === false && checkbox4.checked === false) {
            alert("Tick at least one box.");
            break;
        }
        let randIdx = Math.floor(Math.random()*pass.length); 
        let element = pass[randIdx];
        pass = pass.replace(element,"");        
        finalPass+=element;
    }
    output.innerText = finalPass;
}


copyBtn.addEventListener("click",() => {
    if(finalPass!== ''){
        navigator.clipboard.writeText(finalPass);
        copyBtn.style.backgroundImage="url('copied.png')";
        console.log("copied");
        setTimeout(()=>{
            copyBtn.style.backgroundImage="url('copy.png')";
        },3000);
    }
    else alert("Nothing to copy.\nGenerate a password first !");
});
