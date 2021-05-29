//Anonymous & IIFE Function:

//! 1.print odd number in an array:
let array=[2,5,6,8,35,45];
let resIFFY=[];

(function(){
   array.forEach((e)=>{
      if(e % 2 !== 0){
         resIFFY.push(e);
      }
   });
    console.log(resIFFY);
})();

//! 2.Convert all the string to title caps in a string array:
   let text="this is my computer";
   let letter=text.split(",")

   for(i=0;i<letter.length;i++){
      letter[i]=letter[i].toUpperCase(); 
   }
    console.log(letter.join())

//! 3.sum of array:
 let arr=[20,30,40,50,60,70]
 let totalvalue=0;
 arr.forEach((item)=>{
     totalvalue+=item;
 });

 console.log("The Sum of value is "+totalvalue);

//! 4.Return all the prime numbers in an Array:
function sumPrimes(num) {
   let numArray = [];
   for (let i = 1; i <= num; i++) {
     numArray.push(i);
   }
    
   numArray.map((number) => {
     for (let i = 2; i < number; i++) {
         if(number % i === 0) {
             let index = numArray.indexOf(number);
             return numArray.splice(index, 1);       
         }
     }   
   });
 
  return numArray;
 }
 sumPrimes(10);

 //! 5.program to check if the string is palindrome or not
function checkPalindrome(str) {         

   const len = string.length;
   for (let i = 0; i < len / 2; i++) {

       // check if first and last string are same
       if (string[i] !== string[len - 1 - i]) {
           return 'It is not a palindrome';
       }
   }
   return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);

console.log(value);

//! 6.Remove Duplicates from an Array:
let chars = ['A', 'B', 'A', 'C', 'B'];
let removechar = [new Set(chars)];
console.log(removechar);