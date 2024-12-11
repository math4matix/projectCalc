function appendValue(value){
    const display = document.getElementById('display');
    display.value += value;
}
function clearDisplay(){
    const display = document.getElementById('display');
    display.value = '';
}
function calculate(){
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value)
        if (isNaN(eval(display.value)) || !isFinite(eval(display.value))){
            throw new Error('Parameter is not a number!');
        }
    } catch (e){
        alert('Wystąpił błąd');
        clearDisplay();
    }
}