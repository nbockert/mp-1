
function addition(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let num1 = Number(input1);
    let num2 = Number(input2);
    let result = num1+num2;

    if (result < 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "black";
    }
    document.getElementById('output').innerHTML=String(result);

}
function subtraction(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let num1 = Number(input1);
    let num2 = Number(input2);
    let result = num1-num2;
    document.getElementById('output').innerHTML=String(result);
}
function multiply(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let num1 = Number(input1);
    let num2 = Number(input2);
    let result = num1*num2;
    document.getElementById('output').innerHTML=String(result);
}
function divide(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let num1 = Number(input1);
    let num2 = Number(input2);
    let result = num1/num2;
    document.getElementById('output').innerHTML=String(result);
}

function power(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let num1 = Number(input1);
    let num2 = Number(input2);
    let result = 1;
    for(let i=0;i<num2;i++){
        result *= num1
    }
    document.getElementById('output').innerHTML=String(result);
}
function clearInput(){
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('output').innerHTML="";
}

