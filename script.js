const inputText=document.querySelector("#inputBox");
let outputText=document.querySelector("#outputBox");
let btn=document.querySelector("#btnCheck");

const regex=/^\d{2}\/*\d{2}\/*\d{4}$/;
const months=[0,31,28,31,30,31,30,31,31,30,31,30,31]
const leapyearCheck=()=>{
    let birthdate=(inputText.value).trim();
    let birthDay=birthdate.substring(0,2);
    let birthMonth=birthdate.substring(3,5);
    let birthYear=birthdate.substring(6,10);
  if(birthdate=="")
  outputText.innerText="Please enter a date";
  else if(!regex.test(birthdate)) 
  outputText.innerText="Invalid Format! Please enter a date in DD/MM/YYYY format"; 
  else if(birthMonth>12)
  outputText.innerText="Invalid Date! Please enter a valid date"; 
else if(birthDay>months[birthMonth])
outputText.innerText="Invalid Date! Please enter a valid date"; 
else{

    if((birthYear%4===0 && birthYear%100!=0)||(birthYear%100===0&& birthYear%400===0))
    outputText.innerText="Your birthday is a leap year"
    else
    outputText.innerText="Your birthday is not a leap year"
}
}
btn.addEventListener("click",leapyearCheck)