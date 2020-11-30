function checkISBN(isbn) {
    //benötigte Variablen
    console.log('+++++++++++'+isbn)
    debugger;
    let sum = 0;
    let digNr = 1;
    let i = 0;

    //Wenn die Prüfziffer kleiner als 10 ist.
    while (digNr < 10) {
        let ziffer = parseInt(isbn[i]);
        //console.log('Ziffer: ' + ziffer)

        if (ziffer >= 0 && ziffer <= 9) {
            sum += ziffer * digNr;
            digNr++;
        }
        i++;
    }
    console.log('---------'+sum);
    let pruefziffer = sum % 11
    if (pruefziffer === 0)
        return '';
    else if (pruefziffer === 10)
        return 'X';
    else
        return String(pruefziffer);
}

module.exports = {
    checkISBN
}