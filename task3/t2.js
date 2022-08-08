function testString(str) {

    let openBrackets = ['{', '(', '['], closeBrackets = ['}', ')', ']'], stack = []
    let openIndex, closeIndex

    for (let i = 0; i < str.length; i++) {
        openIndex = openBrackets.indexOf(str[i])
        if(openIndex !== -1) {
            stack.push(openIndex)
            continue;
        }

        closeIndex = closeBrackets.indexOf(str[i])
        if(closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
        
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;

}
console.log(testString('isu([syvstc]ts(crs))cs'))
console.log(testString('isu[syv(stc]ts(crs))cs'))