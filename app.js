// //Program to Find Smallest Number in an Array

// function smallest(arr) {
//   let smallest = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }
// console.log(smallest([12, 13, 100, 45, 67]));

// for (let i = 0; i < 4; i++) {
//   let row = " ";
//   for (let j = 0; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i < 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row += " ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// /* Palidrome or not*/
// function isPalindrome(num) {
//   if (num < 0) {
//     return false;
//   }

//   let oriNum = num;
//   let rev = 0;

//   while (num > 0) {
//     let rem = num % 10;

//     rev = 10 * rev + rem;

//     num = Math.floor(num / 10);
//   }

//   return rev === oriNum;
// }
// console.log(isPalindrome(121));

// // Program to reverse an Integer

// function revInt(num) {
//   numCopy = num;
//   n = Math.abs(num);
//   let rev = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
//   }

//   return numCopy < 0 ? -rev : rev;
// }
// console.log(revInt(-12345));

//Progran to Remove Duplicates from an Array :

// function removeDuplicates(arr) {
//   let x = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[x]) {
//       x = x + 1;
//       arr[x] = arr[i];
//     }
//   }
//   return x + 1;
// }

// console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 3, 4]));

//Program to reverse an Array :

function revArray(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }

  return s;
}

console.log(revArray(["k", "r", "i", "s"]));

// function to Remove Elements from An Array:
var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};

// Recursion : Program to print numbers from n to 1

function printN(num) {
  let n = num;

  if (n == 0) return;
  console.log(n);
  n = n - 1;
  printN(n);
}
printN(10);

//Sum of first N Numbers using Recursion

function sum(s){
    if(s==0) return 0;
    
    return s+sum(s-1)
}
console.log(sum(5))