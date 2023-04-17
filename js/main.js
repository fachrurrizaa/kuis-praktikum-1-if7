function plus() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var equal = num1 + num2;
    document.getElementById('equal').textContent = equal;
}

function minus() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var equal = num1 - num2;
    document.getElementById('equal').textContent = equal;
}

function multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var equal = num1 * num2;
    document.getElementById('equal').textContent = equal;
}

function divice() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var equal = num1 / num2;
    document.getElementById('equal').textContent = equal;
}

function inverse() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var equal = num1 / num2;
    document.getElementById('equal').textContent = equal;
}

function percent() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var equal = num1 / num2;
    document.getElementById('equal').textContent = equal;
}