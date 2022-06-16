var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function cor(){
    if(currentNumber > 0){
        document.getElementById("currentNumber").style.color = "blue";
    }else if(currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
    }else{
        document.getElementById("currentNumber").style.color = "black";
    }
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  
    if(currentNumber > 9){
        document.getElementById("adicionar").disabled = true;
    }else{
        document.getElementById("subtrair").disabled = false;
    }

    cor();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < -9){
        document.getElementById("subtrair").disabled = true;
    }else{
        document.getElementById("adicionar").disabled = false;
    }

    cor();
}



