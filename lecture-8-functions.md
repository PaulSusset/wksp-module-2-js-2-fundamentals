# 2.1.8 - JavaScript Functions

---

## Functions in Math... 😱

<iframe width="840" height="472" src="https://www.youtube.com/embed/VhokQhjl5t0" frameborder="0" allowfullscreen></iframe>

---

### Example 1

```js
// Formula for area of rectangle
length * width

// Turn that into a more math-like function...
f(l, w) = l * w
// Define JavaScript function
function areaRectangle(length, width) {
    return length * width;
}
// Call the JavaScript function
x = areaRectangle(23, 10)
x = 230

```

---

### Example 2

```js
// Formula for area of circle
area = pi * radius * radius
// Define JavaScript function
function areaCircle(radius){
    return 3.14 * radius * radius
}
// Call the JavaScript function
areaCircle(10); // 314
```

---

## WT* is this good for?

- Functions are reusable expressions.
- _Define_ a function with parameters between the brackets.
- to _call_ the function (i.e. use it), you pass it arguments whose values take the place of the parameters in the function definition.
- The function acts just like any other expression when called.
- It produces the value you'd expect from the body of the function.

---

```js
// Example

```

### Exercise 1

```js
// Q1. Write a function that returns the sum of 3 numbers.
function sumOf3(x, y, z) {
    return x + y + z
}
sumOf3(1, 2, 3) // 6

// Q2. Write a function that returns the square of a number minus twice the number.
function math(x) {
    let y = x * 2;
    return x * x - y;
}
math(2) // 0

// Q3. Write a function that returns the a person's full name, given their first and last names.
function fullName (first, last) {
    const fullName = `${first} ${last}`;
    return fullName;
}
let theName = fullName('Paul', 'Susset');
console.log(theName) // PaulSusset

```

---

### Exercise 2

```js
// Q4. Write a function that returns the value of the tax for a given amount.
function tax(price) {
    return price * 0.15;
}


// Q5. Write a function that returns the value 42.
function theAnswer() {
    return 42;
}


// Q6. Write a function that returns "Hello!".


```

---

- Functions are key in implementing these software development principles.
- Complexity emerges from simplicity

[Alternate Function definition](https://www.cs.utah.edu/~germain/PPS/Topics/functions.html)

---

[Next lecture: Array Methods P2](../lecture-9-array-methods-2)