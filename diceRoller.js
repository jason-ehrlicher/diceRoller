function diceRoll(num, num2, Name1) {
    console.log('this is how many sides:', num,num2);
    document.getElementById(Name1).innerHTML = numberMinMax(num, num2);
}

function numberMinMax(min, max) {
    const diceRoll =Math.floor(Math.random() * (max - min + 1) + min);
    console.log(diceRoll);
    return diceRoll;
}

//*Breakdown of how functions work
// function d6() {
//     console.log("Button Clicked");
//     console.log("this is the d6 dice");
//     numberMinMax(1, 6) //*calls number minmax function defined below
//     document.getElementById("roll6").innerHTML = numberMinMax(1, 6) 
// }

// function d8() {
//     console.log("Button Clicked")
//     console.log("this is the d8 dice")
//     numberMinMax(1, 8) //*calls number minmax function defined below
//     document.getElementById("roll8").innerHTML = numberMinMax(1, 8) 
// }

// function d10() {
//     console.log("Button Clicked")
//     console.log("this is the d10 dice")
//     numberMinMax(1, 10) //*calls number minmax function defined below
//     document.getElementById("roll10").innerHTML = numberMinMax(1, 10) 
// }