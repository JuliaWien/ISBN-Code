const {checkISBN} = require('./ISBN_Code')

function checkISBN_Test(isbn)
{
    let res = checkISBN(isbn)
    return res == isbn[isbn.length-1];
}

describe('checkISBN',() => {
    it('should get a string',() =>{
        const result = checkISBN_Test("9780691147314")
        expect(result).toBe(false)
    })
    it('It should ignore "-" ',() =>{
        const result = checkISBN_Test("3-680-08783-7")
        expect(result).toBe(true)
    })
    it('should allow X at last Postion and treat it as a 10',() =>{
        const result = checkISBN_Test("6-680-08783-X")
        expect(result).toBe(true)
    })
    it('should allow X at last Postion and treat it as a 10',() =>{
        const result = checkISBN_Test("5-680-08783-X")
        expect(result).toBe(false)
    })
    it('should return an empty string if digit is 0',() =>{
        const result = checkISBN('147231422')
        expect(result).toBe('')
    })
})