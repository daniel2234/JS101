// // Given a collection of numbers.

// // Iterate through the collection one by one.
// //   - save the first value as the starting value.
// //   - for each iteration, compare the saved value with the current value.
// //   - if the current number is greater
// //     - reassign the saved value as the current value
// //   - otherwise, if the current value smaller or equal
// //     - move to the next value in the collection

// // After iterating through the collection, return the saved value.


// // load the problem into our brain first.

// Therefore, there are two layers to solving any problem:

// The logical problem domain layer.
// The syntactical programming language layer.


// START

// # Given a collection of integers called "numbers"

// SET iterator = 1
// SET savedNumber = value within numbers collection at space 1

// WHILE iterator <= length of numbers
//   SET currentNumber = value within numbers collection at space "iterator"
//   IF currentNumber > savedNumber
//     savedNumber = currentNumber
//   ELSE
//     skip to the next iteration

//   iterator = iterator + 1

// PRINT savedNumber

// END

function findGreatest(numbers) {
  let savedNumber = numbers[0]; //choose the first index value with array

  numbers.forEach(num => {
    if (num > savedNumber) {
      console.log(savedNumber);
      savedNumber = num;
    }
  });

  return savedNumber;
}


console.log(findGreatest([1,2,3,4,5]));


//a larger problem

// while the user wants to keep going
//   - ask the user for a collection of numbers
//   - extract the largest one from that collection and save it
//   - ask the user if they want to input another collection

// return the saved list of numbers



// while the user wants to keep going
//   - ask the user for a collection of numbers
//   - iterate through the collection one by one.
//     - save the first value as the starting value.
//     - for each iteration, compare the saved value with the current value.
//     - if the saved value is greater than or equal to the current number
//       - move to the next value in the collection
//     - otherwise, if the current value is greater than the saved value
//       - reassign the saved value as the current value

//   - after iterating through the collection,
// save the largest value into the list.
//   - ask the user if they want to input another collection

// return the saved list of numbers