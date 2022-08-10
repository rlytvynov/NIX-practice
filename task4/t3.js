function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {

    if (fullLen < input.length || !fillStr) {
        return input
    }

    let str = input, counterForBoth = 0
    let toAdd = fullLen - input.length

    if(fillType ==='FILL_BOTH') {
        for (let i = 0, k = 0; i < toAdd; i++, k++) {
            if (k === fillStr.length) k = 0

            if(!counterForBoth) {
                str = fillStr[k] + str
            } else {
                str += fillStr[k]
            }

            if (k + 1 === fillStr.length) counterForBoth = counterForBoth? 0 : 1
            
        }
    } else {
        for (let i = 0, k = 0; i < toAdd; i++, k++) {
            if (k === fillStr.length) k = 0
            if (fillType === 'FILL_RIGHT') {
                str += fillStr[k]
            } else {
                str = fillStr[k] + str
            }
        }
    }

    return str
}

console.log(strPad('star', 10, '_*_')) // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT' )) // _*__star 
console.log(strPad('star', 8, '*****', 'FILL_BOTH')) // **star**
