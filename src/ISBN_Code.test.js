
const { checkISBN } = require('./ISBN_Code')

function checkISBN_Test(isbn) {
    let res = checkISBN(isbn)
    return res === isbn[isbn.length - 1];
}

describe('Correct ISBN Checksum Calculation', () => {
    it('it should return false', () => {
        const result = checkISBN_Test("9780691147314")
        expect(result).toBe(false)
    })
    it('should get a string', () => {
        const result = checkISBN_Test("9780691147314")
        expect(result).toBe(false)
    })
    it('It should ignore "-" ', () => {
        const result = checkISBN_Test("3-680-08783-7")
        expect(result).toBe(true)
    })
    it('should allow X at last Postion and treat it as a 10', () => {
        const result = checkISBN_Test("6-680-08783-X")
        expect(result).toBe(true)
    })
    it('should allow X at last Postion and treat it as a 10', () => {
        const result = checkISBN_Test("5-680-08783-X")
        expect(result).toBe(false)
    })
    it('should return an empty string if digit is 0', () => {
        const result = checkISBN('147231422')
        expect(result).toBe('')
    })
    it('should return an empty string if digit is 0', () => {
        const result = checkISBN('1000000001')
        expect(result).toBe("1")
    })


    it('should weight the first digit by one', () => {
        expect(checkISBN('100000000')).toEqual('1')
    })
    it('should weight the second digit by one', () => {
        expect(checkISBN('010000000')).toEqual('2')
    })
    it('should produce a "X"', () => {
        expect(checkISBN('050000000')).toEqual('X')
    })
    it('should ignore dashe characters', () => {
        expect(checkISBN('1-000-00000')).toEqual('1')
    })
    it('should return empty string for isbn checksum 0', () => {
        expect(checkISBN('0-000-00000')).toEqual('')
    })
})
