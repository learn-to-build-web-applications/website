export const js_2_4_1 =
`if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}`;

export const js_2_4_1_1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <title>My Webpage</title>
  <script>
    let number = 10;

    if (number > 0) {
      console.log("The number is positive.");
    } else {
      console.log("The number is zero or negative.");
    }
  </script>
</head>
<body>
</body>
</html>`;

export const js_2_4_2 =
`if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if all conditions are false
}`;

export const js_2_4_3 =
`switch (expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  default:
    // code to be executed if no case matches the expression
}`;

export const js_2_4_4 =
`for (initialization; condition; increment/decrement) {
  // code to be executed in each iteration
}`;

export const js_2_4_5 =
`while (condition) {
  // code to be executed as long as the condition is true
}`;

export const js_2_4_6 =
`do {
  // code to be executed at least once
} while (condition);`;

export const js_2_4_7 =
`for (variable in object) {
  // code to be executed for each property
}`;

export const js_2_4_8 =
`for (variable of iterable) {
  // code to be executed for each element
}`;

export const js_2_5_1 =
`function functionName(parameter1, parameter2, ...) {
  // code to be executed
  return result; // optional
}`;

export const js_2_5_2 =
`functionName(argument1, argument2, ...);`;

export const js_2_5_3 =
`let anonymousFunction = function(parameter1, parameter2) {
  // code to be executed
};`;

export const js_2_5_4 =
`const functionName = (parameter1, parameter2) => {
  // code to be executed
  return result; // optional
};`;

export const js_2_5_5 =
`(function() {
  // code to be executed immediately
})();`;

export const js_2_6_1 =
`// Using array literal syntax
let myArray = [1, 2, 3, 4, 5];`;

export const js_2_6_2 =
`// Using Array constructor
let myArray = new Array(1, 2, 3, 4, 5);`;

export const js_2_6_3 =
`let myArray = [1, 2, 3, 4, 5];

console.log(myArray[0]); // Output: 1
console.log(myArray[2]); // Output: 3`;

export const js_2_6_4 =
`let myArray = [1, 2, 3, 4, 5];

myArray[2] = 10;
console.log(myArray); // Output: [1, 2, 10, 4, 5]`;

export const js_2_6_5 =
`let myArray = [1, 2, 3, 4, 5];

console.log(myArray.length); // Output: 5

myArray.length = 3;
console.log(myArray); // Output: [1, 2, 3]`;

export const js_2_6_6 =
`let myArray = [1, 2, 3];

myArray.push(4); // Adds 4 at the end
console.log(myArray); // Output: [1, 2, 3, 4]

let removedElement = myArray.pop(); // Removes the last element and returns it
console.log(myArray); // Output: [1, 2, 3]
console.log(removedElement); // Output: 4

myArray.unshift(0); // Adds 0 at the beginning
console.log(myArray); // Output: [0, 1, 2, 3]

let shiftedElement = myArray.shift(); // Removes the first element and returns it
console.log(myArray); // Output: [1, 2, 3]
console.log(shiftedElement); // Output: 0`;

export const js_2_6_7 =
`let myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray.forEach(function(element) {
  console.log(element);
});`;

export const js_2_7_1 =
`// Using object literal syntax
let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};`;

export const js_2_7_2 =
`// Using Object constructor
let person = new Object();
person.name = "John";
person.age = 30;
person.profession = "Developer";`;

export const js_2_7_3 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

console.log(person.name); // Output: John
console.log(person['age']); // Output: 30`;

export const js_2_7_4 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

person.age = 35;
person['profession'] = "Engineer";`;

export const js_2_7_5 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

person.city = "New York";`;

export const js_2_7_6 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

delete person.profession;`;

export const js_2_7_7 =
`let person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello!");
  }
};

person.sayHello(); // Output: Hello!`

export const js_2_7_8 =
`let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + ": " + person[key]);
}`;

export const js_2_7_9 =
`function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
}

let john = new Person("John", 30);
john.sayHello(); // Output: Hello, my name is John`;

export const js_4_2_1 =
`let element = document.getElementById('elementId');`;

export const js_4_2_2 =
`let elements = document.getElementsByClassName('className');`;

export const js_4_2_3 =
`let elements = document.getElementsByTagName('tagName');`;

export const js_4_2_4 =
`let element = document.querySelector('selector');
let elements = document.querySelectorAll('selector');`;

export const js_4_2_5 =
`element.innerHTML = 'New HTML content';
element.textContent = 'New text content';`;

export const js_4_2_6 =
`let value = element.getAttribute('attributeName');
element.setAttribute('attributeName', 'attributeValue');`;

export const js_4_2_7 =
`element.style.property = 'value';`;

export const js_4_2_8 =
`element.classList.add('className');
element.classList.remove('className');`;

export const js_4_2_9 =
`let newElement = document.createElement('tagName');
let newText = document.createTextNode('Text content');`;

export const js_4_2_10 =
`parentElement.appendChild(newElement);
parentElement.removeChild(childElement);`;

export const js_4_3_1 =
`element.addEventListener('eventName', eventHandler);`;

export const js_4_3_2 =
`function eventHandler(event) {
  // Event handling code
}`;

export const js_4_3_3 =
`element.removeEventListener('eventName', eventHandler);`;

export const js_4_3_4 =
`<button onclick="eventHandler(event)">Click me</button>`;

export const js_4_3_5 =
`// Fetch data from the server
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // DOM manipulation
    const container = document.getElementById('data-container');

    // Create a new list element for each data item
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name;
      container.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });`;

export const js_5_2_1 =
`function callbackFunction(result) {
  // Code to be executed when the callback is invoked
}

// Passing callbackFunction as a callback to another function
someFunction(callbackFunction);`;

export const js_5_2_1_1 =
`function doSomething(callback) {
  // Perform some operations
  console.log("Doing something...");

  // Simulating an asynchronous operation with setTimeout
  setTimeout(function() {
    // Completed the asynchronous operation
    console.log("Operation completed!");

    // Invoke the callback function
    callback();
  }, 2000); // Wait for 2 seconds
}

function callbackFunction() {
  console.log("Callback function called!");
}

// Call the doSomething function and pass the callback function as an argument
doSomething(callbackFunction);`;

export const js_5_2_2 =
`function callbackFunction(err, result) {
  if (err) {
    // Handle error
  } else {
    // Process the result
  }
}`;

export const js_5_3_1 =
`function fetchData() {
  return new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(function() {
      // Simulating a successful response
      const data = { message: "Data successfully fetched!" };

      // Resolve the promise with the data
      resolve(data);
      
      // Simulating an error scenario
      // reject(new Error("Failed to fetch data!"));
    }, 2000); // Wait for 2 seconds
  });
}`;

export const js_5_3_2 =
`promise
.then(result => {
  // Process the result
  return transformedResult;
})
.then(transformedResult => {
  // Process the transformed result
})
.catch(error => {
  // Handle any errors along the chain
});`;

export const js_5_4_1 =
`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;

// export const js_2_5_7 =
// ``;
