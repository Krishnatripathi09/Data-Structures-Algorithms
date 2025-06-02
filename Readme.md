## 📘 DSA Concepts with JavaScript

This repository contains my personal notes, code implementations, and explanations of **Data Structures and Algorithms (DSA)** concepts using **JavaScript**.

### 📌 What you'll find here:

* 📚 Clear explanations of DSA concepts
* 🧠 Step-by-step logic breakdowns
* 💻 JavaScript implementations of problems
* 🔁 Continuous updates as I learn and revise

### 🔍 Topics Covered:

* Arrays, Strings, Objects
* Recursion, Sorting, Searching
* Stacks, Queues, Linked Lists
* Trees, Graphs, Heaps, Hash Tables
* Dynamic Programming, Greedy Algorithms
* Problem-solving patterns and optimizations

### 🚀 Goal:

To strengthen my DSA foundation for technical interviews and real-world problem-solving, and to make this a helpful reference for others learning DSA with JavaScript.



## Javascript Array's:

An array in JavaScript is a data structure that can store multiple values of different data types in a single variable.
It keeps the values in order and lets us access them using their indexex (starting from 0).

for eg:
```Javascript
let mixedArray = [42, "hello", true, null];
console.log(mixedArray[1]); // Output: "hello"
```

# JavaScript Objects

A **JavaScript object** is a data structure which allows us to store data in the form of **key-value pairs**. It helps in organizing and accessing data efficiently.

Each key (also known as a property) is a string, and its corresponding value can be any data type, including numbers, strings, arrays, functions, or even other objects.
```js
const objectName = {
  key1: value1,
  key2: value2,
  // more key-value pairs
};
```

JavaScript Program to Find Lagest Number in An Array:

```javascript
function largestNum(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestNum([12, 13, 100, 45, 67]));
```

javascript Program to find smallest Number in An array:

```javascript
function smallest(arr){
  let smallest = Infinity
  
  for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest ){
      smallest = arr[i]
    }
  }
  return smallest
}
console.log(smallest([12,13,100,45,67]))
```