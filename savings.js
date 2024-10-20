function monthlySavings(arr, cost) {
    if(typeof arr == "number" || typeof cost != "number") {
        return "invalid input"
    }

    let total = 0;
    for(let i=0;i<arr.length; i++) {
        if(arr[i] >= 3000) {
            total += arr[i] - (arr[i] * 0.2)
        } else {
            total += arr[i]
        }
    }

    total -= cost
    if (total >=0) return total 
    else return "earn more" 
} 

const input1 = monthlySavings([1000, 2000, 3000], 5400)
const input2 = monthlySavings([1000, 2000, 2500], 5000)
const input3 = monthlySavings([900, 2700, 3400], 10000)
const input4 = monthlySavings(100, [900, 2700, 3400])
console.log(input1, input2, input3, input4)
