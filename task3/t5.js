function substrCount(input, needle, offset, length) {
    if(offset < 0 || length < 0 || !input || !needle || needle.length > input.length || needle.length > length) {
        return -1
    } else {
        let count = 0
        let strBegin = offset, strEnd = strBegin + length
        if(strEnd > input.length) {
            return -1
        }
        for (let i = strBegin; i <= strEnd; i++) {
            if(input[i] === needle[0]) {
                for (let j = i, k = 0; k < needle.length; j++, k++) {
                    if(input[j] !== needle[k]) {
                        break;
                    }
                    if(k + 1 === needle.length) {
                        count++
                        i = j
                    }
                }
            }
            
        }
        return count
    }
}

console.log(substrCount('Good Golly Miss Molly', 'll', 7, 15))