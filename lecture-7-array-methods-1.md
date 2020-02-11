# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join(); syntax like this will have comma separators by default. to avoid this you can set the separators like so lexicon.join(' ')
(opposite of split)

```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
includes() returns true/false if an array has a value of (specified)
slice() takes elements of an array and makes a new array (start value is included, end value is excluded)
2. `.indexOf()`, `.push()` 
indexOf() returns the index position of the called value in an array
push() includes new elements to an existing array (add not replaces)
side effect of console logging the function directly is it will return the array length
3. `.pop()`, `.sort()`
pop() removes the last element of an array and returns it
sort() organizes and returns an array alphabetically (does mutate)
4. `.shift()`, `.unshift()`
shift() like pop() but takes from the start of an array
unshift() adds an element to the start of an array
5. `.reverse()`, `.lastIndexOf()`
reverse() changes the order of elements in an array back to front
lastIndexOf() searches for an value inside an array and returns the index value (not backwards)
6. `.splice()`, `.toString()`

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

---

[Next lecture: Functions](../lecture-8-functions)