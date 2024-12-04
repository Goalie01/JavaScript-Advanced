// Advanced Labs

// 1.

// function makeCounter() {
//     let currentCount = 0;

//     return function() {
//         currentCount++;
//         console.log(currentCount)
//         return currentCount;
//     }
// }

// let counter1 = makeCounter()
// let counter2 = makeCounter()

// counter1()
// counter1()

// function makeCounter2(startFrom) {
//     let currentCount = startFrom

//     return function() {
//         currentCount ++
//         console.log(currentCount)
//         return currentCount
//     }
// }



// let counter3 = makeCounter2(45)

// counter3()
// counter3()

// function makeCounter3(startFrom, incrementBy) {
//     let currentCount = startFrom

//     return function() {
//         currentCount += incrementBy
//         console.log(currentCount)
//     }
// }

// let counter4 = makeCounter3(50, 5)

// counter4()
// counter4()


// 2.

// Run problem 2 to solve for A

// function delayMsg(msg) {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }

// const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`)

// setTimeout(delayMsg, 3000, '#1: Delayed by 3000ms')
// setTimeout(delayMsg, 2000, '#2: Delayed by 2000ms')
// setTimeout(delayMsg, 0, '#3: Delayed by 1000ms')
// delayMsg('#4: Not delayed at all')

// let fifthTimer = setTimeout(delayMsg, 10000, 'This will be longest delay')

// clearTimeout(fifthTimer)


// 3

// function debounce(func) {
//     let timeout

//     return function() {
//         clearTimeout(timeout)
        
//         timeout = setTimeout(func, 1000)
//     }

// }

// function printMe() {
//     console.log('printing debounced message')
// }

// printMe = debounce(printMe);

// setTimeout( printMe, 100)
// setTimeout( printMe, 200)
// setTimeout( printMe, 300)



// function debounce2(func, ms) {
//     let timeout

//     return function() {
//         clearTimeout(timeout)

//         timeout = setTimeout(func, ms)
//     }
// }

// function debounce3(func, ms) {
//     let timeout

//     return function(msg) {
//         clearTimeout(timeout)

//         timeout = setTimeout(func, ms, msg)
//     }
// }

// function printMe2(msg) {
//     console.log(`printing out debounced message for c: ${msg}`)
// }

// printMe2 = debounce2(printMe2, 1500)

// setTimeout( printMe2, 100, 'msg #1' )
// setTimeout( printMe2, 200, 'msg #2' )
// setTimeout( printMe2, 300, 'msg #3' )



// 4

// function printFibonacci() {
//     let first = 1
//     let second = 1

//     console.log(first)
//     console.log(second)

//     setInterval(function printNext() {
//         let next = first + second
//         console.log(next)

//         first = second
//         second = next
//     }, 1000)

// }

// function printFibonacciTimeout() {
//     let [first, second] = [1, 1] 
//     console.log(first)
//     console.log(second)

//     setTimeout(function printNext(first, second) {
//         let next = first + second
//         console.log(next)

//         setTimeout(printNext, 1000, second, next)
//     }, 1000, first, second)
// }


// function printFibonacciLimit(limit) {
//     let first = 1
//     let second = 1

//     console.log(first)
//     console.log(second)

//     let counter = 2

//     let intervalRef = setInterval(function printNext() {
//         let next = first + second
//         console.log(next)

//         first = second
//         second = next
//         counter++ 
//         if (counter == limit) clearInterval(intervalRef)
//     }, 1000)
// }

// printFibonacci(5)
// printFibonacciTimeout()
// printFibonacciLimit(4)

// 5

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,

//     description() {
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`)
//     }
// }

// car.description()

// setTimeout(() => car.description(), 2000)

// car = {...car, year: 2024}

// let describeCar = car.description.bind(car)

// setTimeout(describeCar, 4000)

// car = {...car, year: 2025}


//6

// function multiply(a, b) {
//     console.log( a * b )
// }

// // multiply.delay(5000)(5, 5)

// Function.prototype.delay = function(ms) {
//     let originalFunction = this
//     return function(arg1, arg2) {
//         setTimeout(originalFunction, ms, arg1, arg2)
//     }
// }

// multiply.delay(2000)(5, 5)

// Function.prototype.delay2 = function(ms) {
//     let originalFunction = this
//     return function() {
//         setTimeout(() => originalFunction.apply(this, arguments), ms)
//     }
// }

// function multiply4 (a,b,c,d) {
//     console.log(a * b * c * d)
// }

// multiply4.delay2(1000)(5,5,5,5)


//7 - review for recording

// class DigitalClock {
//     constructor(prefix) {
//         this.prefix = prefix;
//         this.timer = null;
//     }

//     display() {
//         let date = new Date();

//         let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds];
//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;

//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

//     }

//     stop() {
//         if (this.timer !== null) {
//         clearInterval(this.timer);
//         this.timer = null;
//         }
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), 1000);
//     }

    
// }

// class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//         super(prefix);
//         this.precision = precision;
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.precision);
//     }
// }

// class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeupTime = '7:00') {
//        super(prefix); 
//        this.wakeupTime = wakeupTime;
//     }

//     checkDisplay() {
//         let now = new Date();
//         let [currentHours, currentMinutes] = [now.getHours(), now.getMinutes()];
//         let [wakeupHours, wakeupMinutes] = this.wakeupTime.split(':').map(Number);

//         if (currentHours === wakeupHours && currentMinutes === wakeupMinutes) {
//             console.log('Wake Up!');
//             this.stop();
//         } else {
//             this.display();
//         }
//     }

//     start() {
//         this.timer = setInterval(() => {
//             this.checkDisplay();
//         }, 1000);
//     }
// }

// const myAlarmClock = new AlarmClock('my alarm clock:', '19:30');
// myAlarmClock.start();


//8 - review for recording

// function orderItems(...itemNames) {
//     return `Order placed for: ${itemNames.join(',')}`;
// }

// function validateStringArg(fn) {
//     return function (arg) {
//         if (typeof arg !=="string") {
//             throw new Error("Argument must be a string");
//         }

//         return fn(arg);
//     };
// }

// function validateStringArg(fn) {
//     return function (...args) {
//         for (let arg of args) {
//             if (typeof arg !=="string") {
//                 throw new Error(`Argument ${arg} must be a string`);
//             }
//         }

//         return fn(...args);
//     }
// }

// const validatedOrderItem = validateStringArg(orderItems);
// const validatedOrderItems = validateStringArg(orderItems);

// try {
//     console.log(validatedOrderItem("Apple Watch"))
//     console.log(validatedOrderItem(123))
//     console.log(validatedOrderItems("Apple Watch", "Airpods"))
//     console.log(validatedOrderItems("abc", 123))
// } catch (err) {
//     console.log(err.message)
// }

//9

// let delay = Math.ceil(Math.random() * 20);
// return newPromise((resolve, reject) => {
//     setTimeout(() => {
//         if(delay % 2 ===0) {
//             resolve(delay)
//         } else {
//             reject(delay)
//         }
//     }, delay * 1000)
// })

// randomDelay()
// .then((delay) => console.log(`Successful delay ${delay} seconds`)) 
// .catch((delay) => console.log(`Failed delay of ${delay} seconds`))
// 10

// import fetch from 'node-fetch'
// globalThis.fetch = fetch

// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//         if (response.status === 200) {
//             return response.json();
// } else {
//     throw new Error(`Request failed with status ${response.status}`);
// }

// });
// return fetchPromise;
// }




// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.error(error.message));

// async function asyncFetchURLData(url) {
//     let fetchResponse = await fetch(url);
//     if (fetchResponse.status === 200) {
//         let responsJson;
//     } else {
//         throw new Error(`Request failed with status ${fetchResponse.status}`)
//     }
// }

// async function asyncFetchMultipleURLData(urls) {
//     return Promise.all(
//         urls.map(async(url) => {
//             let response = await fetch(url);
//             if (response.status === 200) {
//                 return response.json();
//             } else {
//                 throw new Error(`Request failed with status ${response.status} for URL: ${url}`)
//             }
//         })
//     )
// }

// (async () => {
//     try {
//         fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//         .then((data) => console.log("Promise-based fetch (valid):", data))
//         .catch((error) => console.error("Promise-based feth (error):", error.message))

//         fetchURLData('https://jsonplaceholder.typicode.com/fake')
//         .then((data) => console.log(data))
//         .catch((error) => console.error("Promise-based fetch (invalid):", error.message))

//         let responseData1 = await asyncFetchMultipleURLData('https://jsonplaceholder.typicode.com/todos/1')
//         console.log("Async fetch (valid):", responseData1);

//         try {
//             let responseData2 = await asyncFetchURLData('https://jsonplaceholder.typicode.com/fake')
//             console.log("Async fetch (invalid):", responseData2)
//         } catch (error) {
//             console.error("Async fetch (error):", error.message)
//         }

//         let responseData3 = await asyncFetchMultipleURLData([
//             'https://jsonplaceholder.typicode.com/todos/1',
//             'https://jsonplaceholder.typicode.com/todos/2',
//             'https://jsonplaceholder.typicode.com/fake'
//         ])

//         console.log("Multiple URLs fetch:", responseData3);
//     } catch (error) {
//         console.error("General error:", error.message);
//     }
// })();