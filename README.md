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

