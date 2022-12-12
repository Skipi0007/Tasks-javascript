const initialString = 'basdasdsa3kjh12bh1223kjh1123123124b124kh1b4kh1b34kh123bkh4b1123123124123123dasda dasd as da1231  sa'
let highestNum = null

let numSearcher = (string, maxNum) => {
    let currentNum = ''
    string.split('').forEach(el => {

        if(el.search(/\d/) === -1 ) {
                currentNum = ''
            }
        else {    
            currentNum = currentNum+el
            if (maxNum === null) {
                maxNum = Number(currentNum)
            } else if (maxNum < Number(currentNum)) {
                maxNum = Number(currentNum)
            }
        }
    })
    return (maxNum)    
}

console.log(numSearcher(initialString, highestNum))

