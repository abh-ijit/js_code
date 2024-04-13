
// -----for loop----------------

// for(let i = 0; i < 10; i++ ){
//     // if(i % 2 === 0){
//     //     console.log(i, "is a even number");
//     // }
//     if(i % 2 != 0){
//         console.log(i, "is a odd number");
//     }
//     // console.log(i);
// }

// for(let i = 9; i >= 0; i-- ){
//     console.log(i);
// }

// ---------while Loop-------

// let i = 0;
// while(i < 10){
//     if(i % 2 == 0)
//     console.log(i, "is a even number");
//     // console.log(i);
//     i++
// }

// let i = 10;
// while(i >= 0){
//     // if(i % 2 == 0)
//     // console.log(i, "is a even number");
//     console.log(i);
//     i--
// }

// ---------do while loop----------
// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i < 10)

// let i = 10
// do{
//     console.log(i)
//     i--
// }while(i >= 0)

// ----------for-of loop-------------

// let value = {
//     name:"Abhijit Bose",
//     state:"West Bengal"
// }

// for(let obj in value ){
//     // console.log("obj------",obj);
//     // console.log("value----------",value);

//     console.log(`${obj}: ${value[obj]}`)
// }

// ----------for-in loop--------

// let value = [
//     {
//         name: "Abhijit Bose",
//         state: "West Bengal"
//     },
//     {
//         name: "Sayan Bose",
//         state: "Odisha"
//     }
// ] 
// let newarray = []

// for(let element of value){
//     // console.log(element);
//     // newarray.push(element)
//     // console.log(value[0]);
// }
// console.log("Newarray",newarray);

// ----Max and Min number from array----------

// let array = [5, 2, 8, 1, 4];
// let max = array[0];
// let min = array[0];

// for (let i = 1; i < array.length; i++) {
//     console.log("arrayi",array[i]);
//     console.log("max1",max);
//     if (array[i] > max) {
   
//         console.log("max2",max);
//         max = array[i];
//     }
//     if (array[i] < min) {
//         min = array[i];
//     }
// }

// console.log("Maximum:", max); // Output: 8
// console.log("Minimum:", min); // Output: 1

// ---sort asending a array using loop----------

// const arr = [99,5,4,78,3,8]

// const sortAsending=(arr)=>{
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]>arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
        
//     }
//     return arr
// }

// console.log("arr",arr)
// console.log("new sort array",sortAsending(arr))

// ---desending array-----------------
// const arr = [99,5,4,78,3,8]

// const sortDesecding=(arr)=>{
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]<arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
        
//     }
//     return arr
// }

// console.log("arr",arr)
// console.log("new sort array",sortDesecding(arr))

// ---asending desending using sort method-----------
// let array = [5, 2, 8, 1, 4];
// array.sort(function(a, b) {
//   return a - b;
// });

// console.log(array); // Output: [1, 2, 4, 5, 8]

// let array = [5, 2, 8, 1, 4];
// array.sort((a, b) => a - b);

// console.log(array); // Output: [1, 2, 4, 5, 8]

// let array = [5, 2, 8, 1, 4];
// array.sort(function(a, b) {
//   return b - a; // Compare b to a instead of a to b
// });

// console.log(array); // Output: [8, 5, 4, 2, 1]

// ---convert lowercase letter into uppercase

// const uppercaseletter = (str)=>{

//     let result = ""

//     for(let i=0; i<str.length; i++){
//         let char = str.charAt(i)
//         result += char.toUpperCase()
//     }
//     return result
// }

// console.log(uppercaseletter("masi"));


// const uppercaseletter = (str)=>{

//     let result = str.toUpperCase()
//   return result
// }

// console.log(uppercaseletter("masi"));

// reverse string using loop-----------------

// const reversestring=(str)=>{

//     let result = ""

//     for(let i=str.length-1; i>=0; i--){
//         result +=  str.charAt(i)  
//     }
//     return result
// } 

// console.log(reversestring("abhijit"));

// for each------------

// const x = [5,3,8,7,9,5]

// x.forEach((value)=>{
//     console.log(value*2)
// })

// reduce an array using loop----

// const addition = (...number) =>{
//     let sum = 0
//     for(let i=0; i<number.length; i++){
//         sum += number[i]
//     }
//     return sum
// }

// console.log(addition(2,5,4,7));

// const addition = (...numbers) => {
//     console.log(numbers);
//    let sum = numbers.reduce((acc,cur)=>{
//        return acc+cur
//     },0)
// console.log(sum);
   
// }
// addition(5,5,4,5)

// const arr = [4,5,8,7,9,3]

// while(arr.length>0){
//     arr.pop()
// }
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     arr.pop()
// }
// console.log(arr);

// const addarray = (...number) =>{
//     let newArr = []
//     for(let i =0; i<number.length; i++ ){
//         newArr.push(number[i])
//     }
//     return newArr
// }

// console.log(addarray(1,2,3,4,5));
// const addarray = (numbers) => {
//     let newArr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         newArr.push(numbers[i]);
//     }
//     return newArr;
// }

// console.log(addarray([1, 2, 3, 4, 5]));

const check = (input) =>{
    if((input => 'a' && input <= 'z' ) || (input => 'A' && input <= 'Z' )){
        console.log(input,"is a alphabet")
    }else{
        console.log(input,"is not a alphabet")
    }
}

// const check = (input) => {
//     // Check if the input is a single character and is either lowercase or uppercase alphabet
//     if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
//         console.log(input, "is an alphabet");
//     } else {
//         console.log(input, "is not an alphabet");
//     }
// }

// Example usage:
check('a'); // Output: a is an alphabet
check('Z'); // Output: Z is an alphabet
check('3'); // Output: 3 is not an alphabet
