function circleArray() {
    this.array = []
}

circleArray.prototype.add = function(element) {
    this.array.push(element)
}

circleArray.prototype.get = function(index) {
    let k = Math.abs(index), final
    if(index < 0) {
        for (let i = 0, c = 0; c <= k; i--, c++) {
            if(this.array[i]==undefined) {
                i = this.array.length - 1
            }
            final = this.array[i]
        }
    } else {
        for (let i = 0, c = 0; c <= k; i++, c++) {
            if(this.array[i]==undefined) {
                i = 0
            }
            final = this.array[i]
        }
    }
    return final
}

let circledArray = new circleArray()
circledArray.add("Київ")
circledArray.add("Харків") 
circledArray.add("Херсон")

console.log(circledArray.get(6))
console.log(circledArray.get(-6))
