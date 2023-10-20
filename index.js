// Code your solution in this file!

// scuber hq
const scuberHq = 42;

// creating a  function distanceFromHqInBlocks
function distanceFromHqInBlocks(distance) {
    const result =  distance - scuberHq;
    return Math.abs(result);
}

// creating a function distanceFromHqInFeet
function distanceFromHqInFeet(blocks){
    let distanceInBlocks = distanceFromHqInBlocks(blocks);
    let distanceInFeet = distanceInBlocks * 264
    return distanceInFeet;
} 

// creating a function distanceTravelledInFeet()
function distanceTravelledInFeet(start, destination){
    let result = Math.abs(destination - start)
    return result * 264
}

// creating a function called calculatesFarePrice
function calculatesFarePrice(start, destination) {
    let result = destination - start;

    if (result <= 400) {
        return 0;
    } else if (result > 400 && result <= 2000) {
        let distance = result - 400;
        let fare = distance * 0.02;
        return fare;
    } else if (result > 2000 && result <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}