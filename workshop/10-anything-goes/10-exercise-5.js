// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array and output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];
for (i = 0; i < 1000; i++){
    let x = i.toString().split('')
    let y = []
    x.forEach(function(cube){
        y.push(cube*cube*cube);
    });
    z = y.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
    if (i === z) {
        armstrongNumbers.push(z);
    }
}


console.log(armstrongNumbers);