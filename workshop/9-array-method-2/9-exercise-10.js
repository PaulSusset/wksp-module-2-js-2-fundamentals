// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function grading(grades){
    let letterGrade = []
    grades.forEach(function(aaah){
        if (aaah < 60 ) {
            letterGrade.push('F')
        } else if (aaah < 70 ){
            letterGrade.push('D')
        } else if (aaah < 80 ){
            letterGrade.push('C')
        } else if (aaah < 90 ){
            letterGrade.push('B')
        } else if (aaah <= 100 ){
            letterGrade.push('A')
        }
    });
    return letterGrade;
}

 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(grading([48, 95, 65, 48, 59, 78, 72, 65]))
console.log(grading([55, 81, 100, 12, 49, 74, 99, 63]))
// Try with other values as well


