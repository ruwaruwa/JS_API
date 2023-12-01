// // Calculator API
// const CalculatorAPI = {
//     add: function (a, b) {
//       return a + b;
//     }
//     // subtract: function (a, b) {
//     //   return a - b;
//     // },
//     // multiply: function (a, b) {
//     //   return a * b;
//     // },
//     // divide: function (a, b) {
//     //   if (b === 0) {
//     //     return 'Cannot divide by zero';
//     //   }
//     //   return a / b;
//     // },
//   };
  
//   // Using the Calculator API
//   const resultAddition = CalculatorAPI.add(5, 3); // Result: 8
// //   const resultSubtraction = CalculatorAPI.subtract(10, 4); // Result: 6
// //   const resultMultiplication = CalculatorAPI.multiply(7, 2); // Result: 14
// //   const resultDivision = CalculatorAPI.divide(15, 3); // Result: 5
  
//   console.log('Addition:', resultAddition);
// //   console.log('Subtraction:', resultSubtraction);
// //   console.log('Multiplication:', resultMultiplication);
// //   console.log('Division:', resultDivision);
  


// Example API endpoint
const apiUrl = 'https://api.example.com/data';

// Function to fetch data from the API
function fetchData() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Work with the fetched data
      console.log('Fetched data:', data);
      // You can manipulate or use the data here
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
}

// Call the function to fetch data
fetchData();

