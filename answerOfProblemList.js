// Grading Points 
// 00 - 39 = C, 
// 40 - 59 = B 
// 60 - 69 = A-
// 70 - 79 = A
// 80 - 100 = A+

console.log("")
console.log("Answer of question - 1")
console.log("-----------------------")

const result = 93;
console.log("Your result is:", result)

if(result < 0) { 
    console.log("Failed")
} else if(result >= 0 && result < 40) {
    console.log("Your grade is: C")
} else if(result >= 40 && result < 60) {
    console.log("Your grade is: B")
} else if(result >= 60 && result < 70) {
    console.log("Your grade is: A-")
} else if(result >= 70 && result < 80) {
    console.log("Your grade is: A")
} else if(result >= 80 && result <= 100) {
    console.log("Your grade is: A+")
} else {
    console.log("Invalid marks")
}


console.log("")
console.log("Answer of question - 2")
console.log("-----------------------")

const number = 67
if (number % 2 == 1) {
    console.log(`${number} is a odd number`)
} else {
    console.log(`${number} is a even number`)
}



console.log("")
console.log("Answer of question - 3")
console.log("-----------------------")

const unSortedArray = [1, 11, 17, 5, 9, 19, 3, 2, 20, 4, 16, 12, 6, 18, 10, 8, 13, 14, 15, 7]
console.log(unSortedArray.sort((a,b) => a-b))
// console.log(unSortedArray.sort((a,b) => b-a))



console.log("")
console.log("Answer of question - 4")
console.log("-----------------------")
 
const year = 1800 
if(year % 400 == 0) {
    console.log("Yes")
} else if(year % 100 == 0) {
    console.log("No")
} else if(year % 4 == 0) {
    console.log("Yes")
} else {
    console.log("No")
}



console.log("")
console.log("Answer of question - 5")
console.log("-----------------------")

for(let i=1; i<=50; i++) {
    if(i%3 == 0 && i%5==0) {
        console.log(i) 
    }
}



console.log("")
console.log("Answer of question - 6")
console.log("-----------------------")

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"]

const findBiggestName = (fName) => {
    let biggestName = friends[0]

    for(let i=0; i<fName.length; i++) {
        const friend = fName[i]

        if(biggestName.length < friend.length) {
            biggestName = friend
        }
    }
    return biggestName
}

const resultedName = findBiggestName(friends)
console.log(resultedName)




console.log("")
console.log("Answer of question - 7")
console.log("-----------------------")

var numbers = [1,2,3,3,4,4,5,6,7,8,9,10]
console.log(...new Set(numbers))



console.log("")
console.log("Answer of question - 8")
console.log("-----------------------")
 
console.log(Math.max(...numbers))
