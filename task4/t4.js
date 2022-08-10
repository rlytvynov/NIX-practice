let reg = new RegExp('^\\d{1,2}-\\d{1,2}-\\d{4}$')

console.log(reg.test('25-07-2021'))
console.log(reg.test('25-7-2021'))
console.log(reg.test('1-1-2021'))
console.log(reg.test('2-12-1979'))