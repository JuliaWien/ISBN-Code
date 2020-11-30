const {checkISBN} = require('./src/ISBN_Code')

const isbn = document.querySelector('#count').value

function berechne()
{
    alert("Hallo Ansbach");
     document.querySelector('#result').innerHTML=  checkISBN(isbn)
}

const button = document.querySelector('#calc')
button.addEventListener('click', berechne);
//document.querySelector('#result').innerHTML = isbn(45734857392)