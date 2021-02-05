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

    // Aufgabe d: Advanced
    const isbn4Input = document.getElementById('isbn4');
    if (document.getElementById('isbn1').value.length < 1 ||
        document.getElementById('isbn2').value.length < 3 ||
        document.getElementById('isbn3').value.length < 5) {  // noch unvollständige ISBN

            const isbn = getISBN3();
        const pruefziffer = checkISBN(isbn);
        console.log("Berechne/ISBN: " + isbn3)
        console.log("Berechne/Prüfziffer: " + pruefziffer)
        console.log("ISBN2.value.length: " + document.getElementById('isbn2').value.length)
        //document.getElementById("debug").innerHTML = "ISBN-Check: " + isbn + '  ==>  ' + pruefziffer

        isbn4Input.style.background = 'lightgrey';
        isbn4Input.value = pruefziffer;
    }
    else {
        const isbn = getISBN4();
        const pruefziffer = checkISBN(isbn);
        isbn4Input.style.background = 'transparent';
        if (pruefziffer === isbn[isbn.length - 1]) {
            document.getElementById('validText').style.visibility = 'visible'
            //valid();
        }
        else {
            document.getElementById('invalidText').style.visibility = 'visible'
            //invalid();
        }
    }
    
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


document.querySelector('#isbn1').addEventListener('input', ISBNTest);
document.querySelector('#isbn2').addEventListener('input', ISBNTest);
document.querySelector('#isbn3').addEventListener('input', ISBNTest);
document.querySelector('#isbn4').addEventListener('input', ISBNTest);
