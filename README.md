## 1️⃣ What is the difference between var, let, and const?
In JavaScript, var, let, and const are used to declare variables (store data). The main differences are scope, redeclaration, and reassignment.

### var
Variables declared with var have function or global scope, can be re-declared, and updated within the same scope.

```JavaScript
var age = 45;
var age = 40;
age = 55;
console.log(age)
```

### let
let variables can be updated or changed after they're first created, but the same variable name can't be declared twice in the same place. They're also block-scoped, meaning the variable only exists within the curly braces { } where it was defined and once outside that block, the variable will not work anymore.

```JavaScript
let score = 10;
score = 55;

let score = 47;
if(true){
    let message = "Hello Beautiful People"
}
console.log(message)
```

### const
const variables must be assigned a value at the time of their creation. Once set, this value is fixed and cannot be changed. Similar to variables declared with 'let', a constant variable cannot be declared more than once within the same scope. Additionally, constant variables exist only within the block of code defined by curly braces { }. Outside of this block, they are not accessible.

```JavaScript
const userID = 10;
userID = 10;

const userID = 30;
const userName = "Abdur Rahim";

if(true){
    let chatNote = "Hello Dear"
}
console.log(chatNote);
```

## 2️⃣ What is the spread operator (...)?

### Spread Operator
The spread operator is just three dots ... and it does one simple thing. It takes a list of items and unpacks them one by one. Think of it like a bag of fruits . Instead of handing someone the whole bag, take each fruit out and place them individually on the table. That's exactly what spread operator does.

```JavaScript
const fruits = ["apple", "orange", "lemon", "mango", "grape", "peach"];
console.log(...fruits); 
```


## 3️⃣ What is the difference between map(), filter(), and forEach()?
JavaScript offers several powerful methods for working with arrays. Among the most commonly used are `map`, `filter`, and `forEach`. Each of these methods has a specific purpose and is useful in different situations. Understanding their differences is essential for getting the exact output from the code.

### map
map goes through every item in an array, transforms it, and gives back a new array. For Example, it's like taking a list of prices and doubling every single one, and the original list stays untouched, and you get a fresh new list back.
It always returns a new array with the changed items, and the original array is never affected. 

```JavaScript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
```

### filter
filter goes through every item in an array and keeps only the ones that pass a test. For Example, it's like going through a list of numbers and picking out only the even ones — you get a smaller list back with just the items that made the cut.

Just like map, it returns a new array and never touches the original.

```JavaScript
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
```


### forEach
forEach goes through every item in an array and does something with it,but it never gives anything back. For instance, it's like reading every item on a shopping list out loud. The list stays the same, you're just doing something with each item.It doesn't return a new array.

```JavaScript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
```


## 4️⃣ What is an arrow function?
### Arrow Function
An arrow function is just a shorter, cleaner way to write a function using => (which looks like an arrow).

### Structure of an Arrow Function
> const functionName = (parameters) => expression or { body }




```JavaScript
const add = (x, y, z) => {
  console.log(x + y + z);
}

add(10, 20, 30);
```