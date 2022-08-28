let num = 6

let christmasTree = (num = 5) => {
    let str = ''
    for (let i = 0; i < num; i++) { //кол-во иттераций
        let k = 0 //счетчтик
        for (let j = 0; j < i+num; j++) { // кол-во отображаемых симоволов на каждом ряду
            
            if(k < num-i-1){ //от 0 до 4, поэтому - i - 1 - определяет кол-во пропусков и звезд
                str+=' '
                k++
            } else {
                str+='*'
            }
        }
        if(i != num-1)
        str+='\n'
    }
    console.log(str)
}

christmasTree()
