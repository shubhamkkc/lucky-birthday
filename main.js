const dateOfBirth = document.querySelector("#d-o-b");
const luckyNumber = document.querySelector("#lucky");
const checkNumber = document.querySelector("#check-button");
const outputBox = document.querySelector("#output") 

function compareValues(sume,luckyNumber){
        if(sume%luckyNumber === 0){
            outputBox.innerText ="Your B-Day is Lucky 🔥";
        }
        else {
            outputBox.innerText ="Your B-Day is not lucky 🥺";
        }
}
function checkNumberIsLucky (){
    console.log("sjs")
    const dob = dateOfBirth.value;
    const sume = calculateSum(dob);
    if(sume&&dob)
    compareValues(sume,luckyNumber.value);
    else
    outputBox.innerText = "Please enter both the fields.";
}
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sume =0;
    for(let i=0;i<dob.length;i++){
        sume= sume + Number(dob.charAt(i));
    }
    return sume;
}
checkNumber.addEventListener('click',checkNumberIsLucky);