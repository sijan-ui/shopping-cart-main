function updatePhoneNumber(isIncrease){
    const phoneField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber ;
    if(isIncrease === true){
        newPhoneNumber =  previousPhoneNumber + 1;
    }else{
       newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneField.value = newPhoneNumber;

    return newPhoneNumber;
}
//phone price update
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})
document.getElementById('btn-phone-neg').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})