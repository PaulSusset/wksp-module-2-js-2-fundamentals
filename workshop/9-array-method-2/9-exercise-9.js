// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    let sum = 0;
    grades.forEach(function(total){
        sum = sum + total;
    });
    let average = Math.round(sum/grades.length)
    return average;
    console.log(sum)
}

console.log(calculateAverage([76, 60, 83, 100, 78]));