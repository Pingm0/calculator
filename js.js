let num1 = "";
let num2 = "";
let op = "";
const disp = document.querySelector("#display")

function press(num){
    num1 += num;
    console.log(num1)
    console.log(num2)

    disp.innerHTML = num1;
}

function setOP(op){
    op = op;
    num2 = num1;
    num1="";
    console.log(op)
}

console.log("This is the type of ops",typeof(op))

function calculate () {
    console.log("Calc")
    if (op == "+") {
        console.log("The +")
        disp.innerHTML = parseInt(num1) + parseInt(num2);

    }
    if (op === "-") {
        disp.innerHTML = num1 - num2
    }
    if (op === "*") {
        disp.innerHTML = num1 * num2
    }
    else {
        disp.innerHTML = num2 / num1
    }     
}


