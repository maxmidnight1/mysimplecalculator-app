// Calculator Program

const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = " ";
}

function calculate() {
  try{
    let result = eval(display.value);
    // Round result to 4 decimal places
    result = Math.round(result * 10000) / 10000;
    display.value = result;
  }
  catch(error){
    display.value = "Error";
  }


}