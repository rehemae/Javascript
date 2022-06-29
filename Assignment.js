// // 1.// Write a JavaScript program which iterates the integers from 1 to 100. But for
// // multiples of three print "Fizz" instead of the number and for the multiples of five print
// // "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for(var i=1; i<=100; i++)

 if(i %3===0 && i%5===0){
     console.log ("FizzBuzz");
 }
 else if (i %3===0){
     console.log("Fizz");
 }
 else if (i %5===0){
     console.log("Buzz");
 }




// // 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

sum =0
for(x=0; x<1000; x++)
if(x%3===0 || x%5===0){
    sum+=x;
   
}
console.log(sum);

// // 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// // check if the current number is odd or even, and display a message to the screen.
// // Sample Output :
// // "0 is even"
// // "1 is odd"
// // "2 is even"

for (var c=0; c<=20; c++)
if(c%0===0){
    console.log( c + " is even")

if(c%2===0){
    alert(c + " is even")
}
else{
    alert(c + " is odd")
}


// // 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// // given array.
// // Let num = [-2, 4,-5, 6,0]

let num = [-2, 4,-5, 6,0]
var largest = num[0];

for( var a=0; a < num.length; a++){

if(largest<num[a]){

    largest = num[a];
}

}
console.log(largest);




// // 5. Using conditional statements, write a JavaScript program to find the largest of the
// // following two numbers: 10 & 40

function numbers(x,y){
    if (x>y){
        console.log(x + " is the largest");
    }
    else if(x<y){
        console.log(y + " is the largest");
    }
}

numbers(10,40);

// 6. Write a JavaScript program to find leap years from 2000 to 2022
// function LeapYear(year){
    
console.log("                             ");

for ( var z = 2000; z<=2022; z++)
if(z%4 ===0 || z% 400===0 && z%100!==0){
    console.log( z + " is a leap year");
}



