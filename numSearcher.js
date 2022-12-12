const initialString = 'b3kjh12bh1223kjh1123123124b124kh1b4kh1b34kh123bkh4b1123123124123123'
let highestNum = null

let numSearcher = (string, maxNum) => {
    let currentNum = ''
    string.split('').forEach(el => {
        console.log(maxNum)
        console.log(currentNum)

        if(el.search(/\d/) === -1 ) {
            if (maxNum === null && currentNum === '') {
                console.log('step 0')
            }else if (maxNum === null) {
                console.log('step 1')
                maxNum = Number(currentNum)
                currentNum = ''
            } else if (maxNum < Number(currentNum)) {
                console.log('step 2')
                maxNum = Number(currentNum),
                currentNum = ''
            } else {
                console.log('step 3')
                currentNum = ''
            } 
        } else {    
            console.log('step 4')
            currentNum = currentNum+el
        }
        
        
    })
    if (maxNum < Number(currentNum)) {
        maxNum = Number(currentNum)
        currentNum = ''
        return (maxNum)
    }
    
}

console.log(numSearcher(initialString, highestNum))

