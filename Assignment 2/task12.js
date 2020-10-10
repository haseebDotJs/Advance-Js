var array=[1,2,3,4,5];
console.log(array.splice(2)); //output 3 4 5
 
console.log(array); //output 1 2 

var array2=[6,7,8,9,0];
console.log(array2.splice(2,1)); //output  8
 
console.log(array2.splice(2,0)); //output 0
 
console.log(array2); //output 6,7,9,0