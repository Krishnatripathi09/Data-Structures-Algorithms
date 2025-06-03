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

for (let i = 1; i <= 5; i++) {
  let row = " ";
  for (let j = 1; j <= 5 - i; j++) {
    row += "*";
  }
  console.log(row);
}
