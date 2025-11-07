// function formatFullName(firstName, lastName) {
//     function cap(name){
//         if(!name) return "Invalid name input"
//         return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//     }
//     return `${cap(lastName)}, ${cap(firstName)}`
// }

// console.log(formatFullName("shallen", "ashford"))

// function calculateTotalCost(price, quantity, taxRate){
//     let totalCost = (price * quantity) * (1 + taxRate)
//     if (isNaN(price, quantity, taxRate)) {
//         return "Invalid Input"
//     }
//     return totalCost
// }

// console.log(calculateTotalCost(10, 10, 10))

function checkEligibility(age, isEmployed){
    if (age >= 19 && isEmployed === "Employed") {
        return "Eligible"
    } else if(age >=19 && isEmployed !== "Employed"){
        return "Conditionally Eligible"
    } else if (age <= 18){
        return "ineligible"
    }
}

console.log(checkEligibility(19, "UnEmployed"))
