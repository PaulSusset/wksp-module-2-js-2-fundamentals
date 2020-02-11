// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q7
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
  
function greetLong(lst) {
    let hello2 = []
    let hello = lst.filter(function(gitOut){
        return gitOut.length > 4;
    })
    hello.forEach(function(greet){
        let hi = "Hello ";
        hello2.push(hi.concat(greet));
    })
    return hello2
}
// -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Jim']));