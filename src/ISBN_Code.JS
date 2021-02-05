//function checkISBN(isbn) 
//{
    //benötigte Variablen
    //debugger;
    //let sum = 0;
    //let digNr = 1;
    //let i = 0;

    // let chars = isbn.split('')
    //    .filter((char)=> char !== '-')
    //    .map((char) => parseInt(char,10))
    //    .forEach((digit, index) => {
    //             sum += digit * (index+1);
    //     })
    
    // const result = sum%11
    // if (result === 10)
    // {
    //     return 'X'
    // } else if(result === 0)
    // {
    //     return '';
    // }

    // return String(result)
// }
    
    //Wenn die Prüfziffer kleiner als 10 ist.
    function checkISBN(isbn) 
    {    
        let sum = 0;
        let stellenwert = 1;
        let i = 0;
        const length = isbn.length;
      
        //Solange die Anzahl der zu prüfenden Ziffern kleiner als 10 ist..
        while (stellenwert < 10 && i<length) 
        {
            let ziffer = parseInt(isbn[i]);
            
            if (ziffer >= 0 && ziffer <= 9) {
                sum += ziffer * stellenwert;
                stellenwert++;
            }
            i++;
        }
        
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