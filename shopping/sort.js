// //case number ++
// document.getElementById("case-btn").addEventListener("click",function(){
//    const caseInput=document.getElementById("case-flied");
//    const caseInputStrig=caseInput.value;
//    const previousCaseInput=parseFloat(caseInputStrig);
//    const newcaseInput=previousCaseInput +1;
//    caseInput.value=newcaseInput;
// })
// //case number --
// document.getElementById("case-minus").addEventListener("click",function(){
//    const caseInput=document.getElementById("case-flied");
//    const caseInputStrig=caseInput.value;
//    const previousCaseInput=parseFloat(caseInputStrig);
//    const newcaseInput=previousCaseInput -1;
//    caseInput.value=newcaseInput;
// })




//FUNCTION PART
function updatreCase(number){
    const caseInput=document.getElementById("case-flied");
        const caseInputStrig=caseInput.value;
        const previousCaseInput=parseFloat(caseInputStrig);
        let newcaseInput;
        if(number===true){
            newcaseInput=previousCaseInput+1;
        }
        else{
          
            newcaseInput=previousCaseInput-1;
           
        }



        caseInput.value=newcaseInput;
        return newcaseInput;


}
function updateCaseTotal(newcaseInput){
    const caseTotal=newcaseInput*59;
const caseInputElement=document.getElementById("caseTaka");
caseInputElement.innerText=caseTotal;
}


document.getElementById("case-btn").addEventListener("click",function(){


const newcaseInput= updatreCase(true);
updateCaseTotal(newcaseInput);
calculationSubTotal();
})
//increa
document.getElementById("case-minus").addEventListener("click",function(){
    const newcaseInput=   updatreCase(false);
    updateCaseTotal(newcaseInput);
    calculationSubTotal();
})