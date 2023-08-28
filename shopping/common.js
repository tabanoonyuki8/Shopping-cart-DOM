//sub total
function getTextByPhone(elementId){
    const subTotalElement= document.getElementById(elementId);
    const subTotalElementString=subTotalElement.innerText;
    const subTotal=parseInt(subTotalElementString);
    return subTotal;
}
//sub funtion
function getsubTotal(elementId,value){
    const currentSubtotalEle=document.getElementById(elementId);
currentSubtotalEle.innerText=value;
}
//calculation sub total
function calculationSubTotal(){
    const subTotal=getTextByPhone('phone-price');
const caseTotal=getTextByPhone('caseTaka');

const currentSubtotal=subTotal+caseTotal;
getsubTotal('sub-total',currentSubtotal);


//current tax
const taxAmountString= (currentSubtotal*0.1).toFixed(2);
const taxAmount=parseFloat(taxAmountString);
getsubTotal('tax',taxAmount);
const finaAmount=currentSubtotal+taxAmount;
getsubTotal('final-total',finaAmount);
}                                                                                                                                                                                                                                                      