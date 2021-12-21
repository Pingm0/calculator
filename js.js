let num1 = "";
let num2 = "";
let op = "";
let result = "";
const disp = document.querySelector("#display")

function press(num){
    num1 += num;


    disp.innerHTML = num1;
}

function setOP(ops){
    op = ops;
    num2 = num1;
    num1="";
}


function calculate () {
    if (result == ""){
        
        if (op == "+") {
            result = parseInt(num1) + parseInt(num2);
            disp.innerHTML = result;

        }
        else if (op === "-") {
            result = parseInt(num2) - parseInt(num1);
            disp.innerHTML = result;

        }
        else if (op === "*") {
            result = parseInt(num1) * parseInt(num2);
            disp.innerHTML = result;

        }
        else {
            result = parseInt(num1) / parseInt(num2);
            disp.innerHTML = result;

        }    
    } else {

        if (op == "+") {
            result = parseInt(result) + parseInt(num1);
            disp.innerHTML = result;

        }
        else if (op === "-") {
            result = parseInt(result) - parseInt(num1);
            disp.innerHTML = result;

        }
        else if (op === "*") {
            result = parseInt(result) * parseInt(num1);
            disp.innerHTML = result;

        }
        else {
            result = parseInt(result) / parseInt(num1);
            disp.innerHTML = result;

        }

    }


}

function clr() {
    disp.innerHTML = 0;
    num1 = "";
    num2 = "";
    op = "";
    result=""

}


