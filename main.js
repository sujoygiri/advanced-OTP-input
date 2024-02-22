(function (){
    const inputDigit1 = document.getElementById("digit1");
    const inputDigit2 = document.getElementById("digit2");
    const inputDigit3 = document.getElementById("digit3");
    const inputDigit4 = document.getElementById("digit4");
    
    function isValidInput(value){
        const regExp = /^[0-9]$/g
        return regExp.test(value);
    }
    
    function focusCorrectInput(){
        if(inputDigit1.value === ''){
            inputDigit1.focus()
        }else if(inputDigit2.value === ''){
            inputDigit2.focus()
        }else if(inputDigit3.value === ''){
            inputDigit3.focus();
        }else if(inputDigit4.value === ''){
            inputDigit4.focus();
        }
    }
    
    function inputUpdate(node,event) {
        let inputData = event.data;
        if(event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward"){
            event.target.value = '';
            node.focus()
        }else if(isValidInput(inputData)){
            if(event.target.value.length > 0){
                event.target.value = inputData;
            }
            focusCorrectInput()
        }else{
            event.target.value = '';
        }
    }
    
    inputDigit1.addEventListener("input",(event)=>{
        inputUpdate(inputDigit1,event)
    })
    inputDigit2.addEventListener("input",(event) => {
        inputUpdate(inputDigit1,event)
    })
    inputDigit3.addEventListener("input",(event) => {
        inputUpdate(inputDigit2,event)
    })
    inputDigit4.addEventListener("input",(event) => {
        inputUpdate(inputDigit3,event)
    })
})()

// git commit message
/*
* initial commit with input validation feature
*/
