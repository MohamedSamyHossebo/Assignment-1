// Part 1
// 1. Convert the string "123" to a number and add 7
const strNm = (str, num) => Number(str) + num;
// console.log(strNm("123", 7));
// 2. Check if the given variable is falsy and return "Invalid" if it is.
const checkVariable = (value) => !value ? "Invalid" : "Valid";
// console.log(checkVariable());
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
const printOddNumbers = () => {
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            continue;
        }
        // console.log(i);
    }
}
printOddNumbers();
// 4. Create an array of numbers and return only the even numbers using filter method.
const printEvenNum = (nums) => nums.filter(num => num % 2 === 0);
// console.log(printEvenNum([1,2,3,4,5,6,7,8,9,10]));
// 5. Use the spread operator to merge two arrays, then return the merged array.
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday).
const dayOfWeek = (num) => {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid number";
    }
}
// console.log(dayOfWeek(3));
// 7. Create an array of strings and return their lengths using map method
const arrOfStrLengths = (arr) => arr.map(str => str.length);
// console.log(arrOfStrLengths(["apple","banana","cherry"]));
//8. Write a function that checks if a number is divisible by 3 and 5.
const AllowedDivisible = (num) => num % 3 == 0 && num % 5 == 0;
// console.log(AllowedDivisible(15));
// 9.Write a function using arrow syntax to return the square of a number
const squareNum = (num) => num ** 2;
// console.log(squareNum(5))

//10. Write a function that destructures an object to extract values and returns a formatted string
const formattedStr = (obj) => {
    const { name, age, city, phone } = obj;
    return `My Name Is ${name}, I'm ${age} years old , i live in ${city} and my phone number is ${phone}.`;
}
// console.log(formattedStr({name:"Mohamed",age:30,city:"Alexandria",phone:"01111111111"}));

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum.
const sum = (num1, num2) => num1 + num2;
// console.log(sum(5, 10));
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
const delayedSuccess = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
};
// console.log(delayedSuccess().then(message => console.log(message)));

// 13. Write a function to find the largest number in an array.
const largestNum=(num)=>Math.max(...num);
// console.log(largestNum([15,200,40,500]));
// 14. Write a function that takes an object and returns an array containing only its keys.
const objKeys=(obj)=>Object.keys(obj);
// console.log(objKeys({name:"mohamed",age:25,city:"Alex"}))
// 15. Write a function that splits a string into an array of words based on spaces.
const splitArr=(str)=>str.split(" ");
// console.log(splitArr("Hello world this is a  test"));
