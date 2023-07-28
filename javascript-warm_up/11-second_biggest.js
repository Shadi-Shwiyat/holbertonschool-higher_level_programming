#!/usr/bin/node

function bubbleSort (array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    // Each iteration will move the largest element to the end
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements and swap them if they are in the wrong order
      if (array[j] < array[j + 1]) {
        // Swap elements using a temporary variable
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const args = process.argv.slice(2);
const unsortedArray = [];

if (args[0] === undefined || args[1] === undefined) {
  console.log('0');
} else {
  let i = 0;
  while (args[i] !== undefined) {
    unsortedArray.push(Number(args[i]));
    i++;
  }
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray[1]);
}
