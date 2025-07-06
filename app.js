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

function sum(s) {
  if (s == 0) return 0;

  return s + sum(s - 1);
}
console.log(sum(3));

//sum of all elements in an Array using Recursion

let arr1 = [1, 2, 3, 4, 5];

// Sum of all elements in An Array
function sumArr(n) {
  if (n == 0) return arr1[0];

  return arr1[n] + sumArr(n - 1);
}
console.log(sumArr(arr1.length - 1));

// Factorial of a Number :

function fact(num) {
  if (num == 1) {
    return 1;
  }

  return num * fact(num - 1);
}
console.log(fact(5));

// FiboNacci Series using Recursion

function fiboNacci(num) {
  if (num <= 1) return num;

  let fibo = fiboNacci(num - 1) + fiboNacci(num - 2);

  return fibo;
}
console.log(fiboNacci(5));

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let x = 0;
  while (x < strs[0].length) {
    let ch = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (ch != strs[i][x] || x == strs[i].length) {
        return strs[0].substring(0, x);
      }
    }
    ++x;
  }
  return strs[0];
};


// program to Reverse an Integer: 
function(x) {

    let temp = x;
let rev =0;
x=Math.abs(x)
while(x>0){
    let rem = x%10;
    rev = (rev*10)+rem;
    x = Math.floor(x/10)
}


if(rev < -(2**31)|| rev >2**31-1) return 0
return  temp<0 ? -rev : rev

};