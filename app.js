function smallest(arr) {
  let smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(smallest([12, 13, 100, 45, 67]));

for (let i = 0; i < 4; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

for (let i = 1; i < 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row += "*";
  }
  console.log(row);
}

/* Palidrome or not*/
function isPalindrome(num) {
  let oriNum = num;
  let rev = 0;

  while (num > 0) {
    let rem = num % 10;

    rev = 10 * rev + rem;

    num = Math.floor(num / 10);
  }

  return rev === oriNum;
}
console.log(isPalindrome(121));
