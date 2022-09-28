function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    //calculate sub total
    const currentPhoneTotal = getTextElementValueById('phone-price');
    const currentCaseTotal = getTextElementValueById('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', currentSubTotal);
    //calculate tax rate
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-ammount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);
}