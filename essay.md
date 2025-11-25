 # Part 2: Essay Questions
## 1. What is the difference between forEach and for...of? When would you use each? 
- forEach it's an Array Method Allows to execute a call back function for each array element , but it's not supporting break or continue or return: example 
```
[1,2,3].forEach(num=>{
    console.log(num);
});

```
- for ... of  it's built-in loop in JS working on iterables like [sets,maps,arrays] and it allows to use break or continue or return and supports using await inside of it . 
  example : 
```
for(const num of [1,2,3]){
    console.log(num);
};
```

  #### we can use forEach when we needs to apply small function on all elements without controlling in the flow.
  #### we can use for...of if we needs more control like ```await```
## 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
 - Hoisting is the process of lifting the variables to the top scope in the process of the compilation before run the code .
 - example : 
 ```
  console.log(a)     
  var a = 10;
```
- TDZ (Temporal Dead Zone) is the duration of starting the scope and initialize the variable ```let``` or ```const``` in this duration if you tried use the variable you'll get a reference error
```
console.log(b);
let b = 5;
```
## 3. What are the main differences between == and ===? 
 - ```==``` Doing Type coercion before the Comparison , it means trying to convert the values to the same type, also it compares only the values
  example  
  ```
  5 =="5" //true
  ``` 
  - ```===``` Doing  Strict Comparison without any conversion , and it compares types and values .
  example
  ```
  5 === "5" //false
  ```
  - we use ```===``` in the most cases Because it's more accurate and clearer
## 4. Explain how try-catch works and why it is important in async operations.
 - try and catch it's an error handling mechanism.
 - the code inside the box is executed ,and if an error occurs,
    it's Automatically moved to the catch box.
    example 
    ```
    try{
        let 7mbozo = JSON.parse("invalid json");
    } catch(err){
        console.error("Error Happened",err);
    }
    ```
   - **in ```async```**:
    Errors within the Promise must be caught.**
    - **Within ```async/await```, any await can throw an Error ,so it's must be surrounded by a ```try-catch```** 
    example 
    ```
    async function fetchData(){
        try{
            const res = await fetch ("url");
        }catch(err){
            console.error("API Error",err);
        }
    }
    ```
    - **This Prevents The Code From Failing Completely Duo To an unexpected error**
## 5. What’s the difference between type conversion and coercion? Provide examples of each.
- Type Conversion : Explicit Conversion programmed by you.
example 
```
Number("10") //10
String(10)  //"10"
```
- Type Coercion : An  indirect conversion that's automatically generated from JavaScript During Operations.
  example
  ```
    "5" * 2 //10 (string coerced to number)
    "5" + 2 //"52" (number coerced to string )
  ```
  #### Conversion: You Decide.
  #### Coercion : JS Decide.
