const dateOfBirth = document.querySelector("#dateofbirth");
const luckyno = document.querySelector("#luckynumber");
const checkbutton = document.querySelector("#checknumber");
const outputbox = document.querySelector("#output");


function checknumberislucky(){
    const dob = dateOfBirth.value;
    const sum = calculate(dob);
        if(sum%luckyno ===0){
        outputbox.innerText ="Your Birthday is Lucky 😊";
    }
    else{
        outputbox.innerText ="Your Birthday is not Lucky 😊";
    }
}

function calculate(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
} 

checkbutton.addEventListener('click', checknumberislucky);
