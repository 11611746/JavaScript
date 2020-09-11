var inputString1 = "";
var inputString2 = "";
var opert;
var calc;

function input(s1){
        inputString1 += s1;
    document.getElementById("display").value = inputString1;
}

function operator(op){
    inputString2 = inputString1;
    document.getElementById("display").value = op;
    opert = op;
    inputString1 = "";
}

function calculate(){
    if(opert==="+"){        
    calc = parseInt(inputString2)+parseInt(inputString1);
    document.getElementById("display").value = calc;
    inputString1 = calc;
    }

    if(opert==="*"){        
        calc = parseInt(inputString2)*parseInt(inputString1);
        document.getElementById("display").value = calc;
        inputString1 = calc;
    } 

    if(opert==="-"){        
        calc = parseInt(inputString2)-parseInt(inputString1);
        document.getElementById("display").value = calc;
        inputString1 = calc;
    } 

    if(opert==="/"){        
        calc = parseInt(inputString2)/parseInt(inputString1);
        document.getElementById("display").value = calc;
        inputString1 = calc;
    } 
}


function eraseAll() {
    inputString1 = "";
    document.getElementById("display").value = inputString1;
};