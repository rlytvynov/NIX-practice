function findWordBySubStr(str, subStr) {
    let strArr = str.split(' ')
    let re = new RegExp(`${subStr}`)
    for (const element of strArr) {
        if(re.test(element)) {
            return element
        }
    }
}

let str = "Ми знаємо, що монохромний колір – це градації сірого"
let subStr = 'хром'
console.log(findWordBySubStr(str, subStr))