const weight = 70; ///weight needed to ride a roller coaster and my if conditional statement

if (weight > 95){
    console.log("You are safe to ride the roller coaster.");

} else if (weight < 69){
    console.log("It's not safe for you to ride this roller coaster.");
}

else {

    console.log("You do not meet the weight requirements for this ride.");

}


let myWeight = 125;
let yourWeight = 90;

let message = `My weight is ${myWeight} and your weight is ${yourWeight}. We are cleared.`;

console.log(message);



let ride = 4;
let rideName;

switch (ride) {
    case 1:
        rideName = "Boomerang";
        break;
    case 2:
        rideName = "Superman";
        break;
    case 3:
        rideName = "Scream";
        break;
    case 4:
        rideName = "Twister";
        break;
    default:
        rideName = "Invalid ride name";
}

console.log(rideName);  // Output: Twister



