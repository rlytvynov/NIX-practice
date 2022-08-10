function formatString(str) {
    let reg = /(\D+)(, )(\D+)/
    let arr = str.split('\n')

    for (let index in arr) {
        arr[index] = arr[index].replace(reg, "$3 $1");
    }
    return arr.join('\n')
}

console.log(formatString("Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo"))

/*var num = "11222333";

// This regex captures the last 3 digits as capture group #2
// and all preceding digits as capture group #1
var re = /(\d+)(\d{3})/;

console.log(re.test(num));

// This replace call replaces the match of the regex (which happens
// to match everything) with the first capture group ($1) followed by
// a comma, followed by the second capture group ($2)
console.log(num.replace(re, "$2,$1"));*/