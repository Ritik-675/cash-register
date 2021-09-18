const billAmount = document.querySelector("#bill-amount") ;
const cashGiven = document.querySelector("#cash-given") ;
const checkButton = document.querySelector("#check-button") ;
const message = document.querySelector("#error-message") ;
const noOfNotes = document.querySelectorAll(".no-of-notes") ;
const availableNotes= [2000,500,100,20,10,5,1];
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
            showMessage("Cash Provided must be equal or greater than Bill Amount") ;
        }
    }
    else{
        showMessage("Invalid Bill Amount") ;
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
function hideMessage(){
    message.style.display="none" ; 
}
function showMessage(msg){
    message.style.display="block" ;
    message.innerText=msg ;
}
checkButton.addEventListener("click",validateBillAndCashAmount);