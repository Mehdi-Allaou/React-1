const namesArray = ['Joakim', 'Jeanette', 'Jack', 'Hans', 'Liam', 'Tommy', 'Sara'];

let usersArray = [
  { id: 1, name: 'Joakim', email: 'joakim@mail.com', age: 34, status: true },
  { id: 2, name: 'Jeanette', email: 'jeanette@mail.com', age: 34, status: false },
  { id: 3, name: 'Jack', email: 'jack@mail.com', age: 24, status: false },
  { id: 4, name: 'Hans', email: 'hans@mail.com', age: 37, status: false },
  { id: 5, name: 'Liam', email: 'liam@mail.com', age: 16, status: false },
  { id: 6, name: 'Tommy', email: 'tommy@mail.com', age: 40, status: true },
  { id: 7, name: 'Sara', email: 'sara@mail.com', age: 32, status: true },
]

let numberOfUsers = 0;

// console.log(usersArray[1].name);


// FOR loopar


// Loopar ett givet antal gånger
for(let i = 0; i < 5; i++) {
  // console.log(i, namesArray[i])
}

// Loopar igenom en hel array
for(let i = 0; i < namesArray.length; i++) {
  // console.log(namesArray[i])
}


// FOR OF loopar

for(let name of namesArray) {
  // console.log(name);
}

for(user of usersArray) {
  // console.log(user.email)
}


// WHILE Loopar

let i = 1;

while(i < 5) {
  // console.log('while: ' + i);
  i++; // kom ihåg att inkrementera i, annars blir det en oändlig loop
}

// console.log('i är ' + i);


do {
  // console.log('do while: ' + i)
  i++;
} while(i < 7)

// console.log('i är ' + i);



// High order array methods

// ForEach loop

// namesArray.forEach(function(name) {
//   console.log(name)
// })

// namesArray.forEach(name => {
//   console.log(name);
// })

// usersArray.forEach(user => {
//   console.log(user.name, user.age, user.email);
//   numberOfUsers ++;
// })
// console.log(numberOfUsers);


// MAP

const userEmail = usersArray.map(user => {
  return user.email;
})
// console.log(userEmail);


// FILTER
const loggedIn = usersArray.filter(user => {
  return user.status === true;
})

// console.log(loggedIn);



console.log(usersArray);
usersArray = usersArray.filter(user => {
  return user.id !== 4 && user.id !== 5 && user.id !== 1;
})
console.log(usersArray);



/*
2) Async
a)


Create a function reverseString(str, cb), that takes a string str that should be reversed.
•	The function does not return anything (undefined), but instead takes a function cb which it will call with the result of the operation
•	The function waits 5 seconds before calling back with the result
Example use:

// reverseString('hello', function (result) {
//   console.log(result); // => olleh
// });



*/



/*

reverseString('hello') {
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
// reverseString("hello");


// const reverseString('hello',) {
//     return str.split("").reverse().join("");
// }
// console.log (reverseString("hello"));


// const reverseString = usersArray.filter(user => {
//     return user.status === true;
//   })


// reverseString('hello', reverted => {
//     return reverseString(reverted).split('').reverse().join('');
// })
// console.log(reverted);




// // newNames.sort();
// // console.log(newNames);
// // newNames.reverse();
// // console.log(newNames);
// newNames.sort().reverse();



/*

b)
You are given three alternative functions to check the battery level of your computer (0-100%). They all provide the same result, but have different interfaces;
•	getBatteryLevelSync()
- returns the current battery level
•	getBatteryLevel(callback)
- returns nothing, but takes a callback with the signature function (error, currentBatteryLevel) { ... }
•	getBatteryLevelAsync()
- returns a promise of the current battery level
Provide a separate example for each of the functions, where you get the current battery level and log it to the console.

*/





let arr = [1,2,3,4];

function calculate(array, operator){
    var total = array[0];
    var doCalculation = {
        "+" : function(result, item){ 
            total += item;
        },
        "-" : function(result, item){
            total -= item;
        },
        "*" : function(result, item){
            total *= item;
        },
        "/" : function(result, item){
            total /= item;
        }
    };

    function forEach(array, callback){
      for(var i=1; i<array.length; i++){
          callback(array[i]);
      }
    }

    forEach(array, function(item){
        doCalculation[operator](total, item);
    });
    console.log(total); 
    return total;
}

calculate(arr, "+")
calculate(arr, "-")
calculate(arr, "*")
calculate(arr, "/")


