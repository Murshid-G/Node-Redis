// console.log("hi");

// //duplicate array
// function duplicate(array) {
//     var initialLength = array.length; // Store the initial length
//     for (var i = 0; i < initialLength; i++) {
//       array.push(array[i]); // Push a duplicate of each element
//     }
//     return array;
//   }
  
//   const arr = [1, 2, 3];
//   const newArr = duplicate(arr);
//   console.log(newArr);

//   // A basic function that adds two numbers
// function add(a, b) {
//     return a + b;
//   }
  
//   // Curry the add function
//   function curryAdd(a) {
//     return function(b) {
//       return a + b;
//     };
//   }
  
//   // Usage of the curried function
//   const add5 = curryAdd(5);
//   console.log(add5(3)); // Output: 8

// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
//   }
  
//   // Example usage
//   const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
//   const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
//   console.log(arrayWithoutDuplicates); // Output: [1, 2, 3, 4, 5]