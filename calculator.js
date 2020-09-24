let num_a = 3, num_b = 5, operator= "*"
let addition="+", subtraction = "-", multiplication="*", division="/"

if (operator === addition){
    console.log(num_a + num_b)
}
else if (operator === subtraction) {
    console.log(num_a - num_b)
}
else if (operator === multiplication) {
    console.log(num_a * num_b)
}
else if (operator === division) {
    console.log(num_a / num_b)
}
else {
    console.log("please enter a valid operator")
}