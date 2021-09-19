const billAmount = document.querySelector("#bill-amount") ;
const cashGiven = document.querySelector("#cash-given") ;
const checkButton = document.querySelector("#check-button") ;
const message = document.querySelector("#error-message") ;
const noOfNotes = document.querySelectorAll(".no-of-notes") ;
const proceed = document.querySelector(".p-but") ;
const tester = document.querySelector(".container1") ; 
const boxU2 = document.querySelector(".box2") ;
const billAlert = document.querySelector(".opa-text") ;
const remCash = document.querySelector(".rem-cash") ;
const availableNotes= [2000,500,100,20,10,5,1];
boxU2.style.display="none" ;
tester.style.display="none" ;
function validateBillAndCashAmount(){
    if(billAmount.value > 0)
    {
        hideMessage() ;
        if(cashGiven.value - billAmount.value >= 0){
            const amountToBeReturned = cashGiven.value - billAmount.value ;
            console.log("am",amountToBeReturned) ;
            calculateChange(amountToBeReturned) ;
        }
        else{
            showMessage("** Cash Provided must be equal or greater than Bill Amount") ;
        }
    }
    else{
        showMessage("** Invalid Bill Amount") ;
    }
}
checkButton.addEventListener("click",validateBillAndCashAmount) ;
function calculateChange(amountToBeReturned){
    for(let i=0 ; i < availableNotes.length ; i++)
    {
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]) ;
        amountToBeReturned%=availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes ;
    }
}

function expandWin(){
    if(billAmount.value > 0)
    {
        boxU2.style.display="initial" ;
        tester.style.display="none"
    }
    else{
        billAlert.innerText =  "** Enter a valid Bill Amount" ;
    }
}

proceed.addEventListener("click",expandWin) ;
function expandTable(){
    if(billAmount.value > 0 && cashGiven.value - billAmount.value >= 0)
    {
        tester.style.display="initial" ;
        remCash.innerText = "Cash to be Returned : " +String(parseInt(cashGiven.value) - parseInt(billAmount.value)) ;
    }
}
checkButton.addEventListener("click",expandTable) ;
function hideMessage(){
    message.style.display="none" ; 
}
function showMessage(msg){
    message.style.display="block" ;
    message.innerText=msg ;
}
checkButton.addEventListener("click",validateBillAndCashAmount);