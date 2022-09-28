// Listener function 
function updateFildNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

//click button and update price
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price');
    caseTotalElement.innerText = caseTotalPrice;
}
//step-1
document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumber = updateFildNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
});

document.getElementById('btn-case-neg').addEventListener('click', function(){
    const newCaseNumber = updateFildNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});