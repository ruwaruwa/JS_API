// // Chuck Norris Jokes API endpoint
// const apiUrl = 'https://api.chucknorris.io/jokes/random';

// // Function to fetch a random Chuck Norris joke
// function fetchChuckNorrisJoke() {
//   fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Display the fetched Chuck Norris joke
//       console.log('Chuck Norris Joke:', data.value);
//     })
//     .catch(error => {
//       console.error('There was a problem fetching the Chuck Norris joke:', error);
//     });
// }

// // Call the function to fetch a Chuck Norris joke
// fetchChuckNorrisJoke();

// const currentDate = new Date();

// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const dayOfWeek = daysOfWeek[currentDate.getDay()];
// const month = monthsOfYear[currentDate.getMonth()];
// const day = currentDate.getDate();
// const year = currentDate.getFullYear();

// const formattedDate = `Today is ${dayOfWeek}, ${month} ${day}, ${year}`;

// console.log(formattedDate);
////////////////////nww
// const myElement = document.querySelector('#demo');
// myElement.textContent = 'New content';

// // Adding an event listener to a button
// const myButton = document.querySelector('#mynbottom');
// myButton.addEventListener('click', () => {
//   // Do something when the button is clicked
// });
