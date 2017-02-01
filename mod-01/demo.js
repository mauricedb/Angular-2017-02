var inpX = document.getElementById('x');
var inpY = document.getElementById('y');
var btnAdd = document.getElementById('add');
var btnSubtract = document.getElementById('subtract');
var preResult = document.getElementById('result');

btnAdd.addEventListener('click', add);
btnSubtract.addEventListener('click', subtract);

function add() {
    var x = inpX.value;
    var y = inpY.value;

    showResult(x + y);
}

function subtract() {
    var x = inpX.value;
    var y = inpY.value;

    showResult(x - y);
}


function showResult(result) {
    preResult.textContent = result.toString();

}