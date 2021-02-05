//const { validate } = require('webpack')
const { checkISBN } = require('./src/ISBN_Code')
//const {berechne} = require('./src/ISBN_Code')

function clear() {
    document.getElementById('validText').style.visibility = 'hidden';
    document.getElementById('invalidText').style.visibility = 'hidden';
}

function getInput() {
    return document.querySelector('#count').value;
}

function showValid() {
    document.getElementById('validText').style.visibility = 'visible';
}

function showInvalid() {
    document.getElementById('invalidText').style.visibility = 'visible';
}

function debug() {
    document.getElementById('debug').innerHTML = "Hello Test";
}

function getISBN3() {
    return document.getElementById('isbn1').value + "-" +
        document.getElementById('isbn2').value + "-" +
        document.getElementById('isbn3').value;
}
function getISBN4() {
    return document.getElementById('isbn1').value + "-" +
        document.getElementById('isbn2').value + "-" +
        document.getElementById('isbn3').value + "-" +
        document.getElementById('isbn4').value;
}

function berechne() { 
    clear();
    const isbn = document.getElementById('isbn').value;
    const pruefziffer = checkISBN(isbn);
    if (pruefziffer === isbn[isbn.length - 1]) {
        document.getElementById('validText').style.visibility = 'visible';
    }
    else 
        document.getElementById('invalidText').style.visibility = 'visible';
}

function ISBNTest(e) {
    clear();
    berechne();

    var target = e.target;
    if (target.value.length >= target.attributes["maxlength"].value) {
        let next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    } else if (target.value.length == 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}

clear();


document.getElementById('calc').addEventListener("click", berechne);
document.querySelector('#isbn').addEventListener('input', ISBNTest);