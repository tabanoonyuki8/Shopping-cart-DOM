//phone calculation
function updatePhone(number){
    const phoneInput=document.getElementById("phone-input");
    const phoneInputValueString=phoneInput.value;
    const perviousphoneInputValue=parseFloat(phoneInputValueString);

    let newPhoneInput;
          if(number===true){
            newPhoneInput= perviousphoneInputValue +1;
          }
          else{
            newPhoneInput= perviousphoneInputValue -1;
          }


    phoneInput.value=newPhoneInput;
    return newPhoneInput;
}
function updatePhoneTotal(newPhoneInput){
         const phoneTotal=newPhoneInput*1219;
         const phoneElement=document.getElementById("phone-price");
         phoneElement.innerText=phoneTotal;

}

//phone incre button
document.getElementById("phone-btn").addEventListener("click",function(){
    
    
  const newPhoneInput=  updatePhone(true);
  updatePhoneTotal(newPhoneInput);

  calculationSubTotal();

})
//phone disc
document.getElementById("phone-minus").addEventListener("click",function(){
    
    
  const newPhoneInput=  updatePhone(false);
  updatePhoneTotal(newPhoneInput);     
  calculationSubTotal();                         
})