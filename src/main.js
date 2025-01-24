import './assets/main.css'
import "primeicons/primeicons.css";
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')



// console.log("Test javascript")

// //-------------------------
// const url = "https://cors-anywhere.herokuapp.com/https://careers.netizenexperience.com/api/assessment/se";
// const email = "mohdaizat34@gmail.com";

// const valueOfY = 56
// let valueOfX = 0 

// //let's calculate x 
// // equation: 22x - 15y = 35
// // equation: x = 15*y + 35 / 22 
// valueOfX =  (15 * valueOfY + 35) / 22 
// console.log("value of x:", valueOfX)

// const payload = {
//     email: email,
//     hash:"dfe4873448227347ee337e439c07fb3fff670bce39166c3f14f2aad0c0c8c996",
//     x:valueOfX,
//     y:valueOfY
// };

// // POST request
// fetch(url, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(payload)
// })
// .then(response => response.json())
// .then(data => {
//     console.log('Response:', data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });


// {
//     "message": "Complete the task by sending a PUT request to this endpoint with 'email', 'hash', 'x' and 'y' in the JSON body. The 'hash' is included here, and you can derive 'x' and 'y' by solving the puzzle.",
//     "hash": "f8b40fcaac78869c49f74298a9953b64634231889402a1f7dcbfb6b482918a6b",
//     "puzzle": "Calculate the value of 'x' that satisfies the equation 22x - 15y = 35, where 'y' is the number of HTML <p> tags on this page: https://www.netizenexperience.com/careers"
// }
    
