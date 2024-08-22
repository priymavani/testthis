//     console.log(b + "  b is maximum")
//   }else{
//     console.log(c+ " c is maximum")
//   }
// }
// minmum2(90,89,75)

// console.log(" ______________________________________");

// console.log(" ");
// // table
// var a_ = 1;
// var b_ = 12;
// for(var i = 1;i<=b_;i++){
//   for(var j = 0;j<=i*10;j+=i){
//     console.log(i + " * "+j/i+ " = "+j)
//   }
//   console.log("--------------------------")
// } 

// for(i=1;i<=12;i++){
//   for(j=1;j<=10;j++){
//     console.log(i,"*",j,"=",i*j)
//   }
// }


// console.log(" ______________________________________");

// console.log(" ");


// var p = 45;
// var q = 65;
// var sum = 0;
// for(var l = p;l<=q;l++){
//   sum += l;
//   console.log(sum)
  
// }
// console.log("total addition of "+p+" to "+q+ " is  = "+sum);

// console.log(" ______________________________________");

// console.log(" ");
// // prime number
// function prime(u){
//   var count_ = 0;
//   for(var i = 2;i<u;i++){

//     if((u%i == 0)){
//       count_ += 1

//     }
//   }
//   if(count_ == 0){
//     console.log(u +" is prime number")
//   }else{
//     console.log(u + "  not prime number")
//   }
  
// }
// prime(22)

// console.log(" ----------------------------------------------")
// console.log(" ")

// switch(10){
//   case 1:
//     console.log("January");
//     break;
//     case 2:
//     console.log("February");
//     break;
//     case 3:
//     console.log("March");
//     break;
//     case 4:
//     console.log("April");
//     break;
//     case 5:
//     console.log("may");
//     break;
//     case 6:
//     console.log("June");
//     break;
//     case 7:
//     console.log("july");
//     break;
//     case 8:
//     console.log("August");
//     break;
//     case 9:
//     console.log("September");
//     break;
//     case 10:
//     console.log("October");
//     break;
//     case 11:
//     console.log("November");
//     break;
//     case 12:
//     console.log("December");
//     break;
//     default:
//       console.log(" Invalid Month")
    

// }


// console.log(" ----------------------------------------------")
// console.log(" ")

// console.log(" * * * * * * * * *")

// console.log(" ----------------------------------------------")
// console.log(" ")

// function add(a,b){
//   var sum = a+b;
//   console.log(sum)
// }
// add(2,8)

// console.log(" ----------------------------------------------")
// console.log(" ")



// var string = "123456789"
// console.log(string.length);

// console.log(" ----------------------------------------------")
// console.log(" ")


// var array = [[1,2,3],
// [4,5,6],
// [7,8,9]]




// console.log(" ----------------------------------------------")
// console.log(" ")

// var arrays = [101,2,5,106,480,128];
// for(var i =0; i<arrays.length;i++){

// }
// console.log(" ----------------------------------------------")
// console.log(" ")
// console.log(" ----------------------------------------------")
// console.log(" ")
// console.log(" ----------------------------------------------")
// console.log(" ")


// var a = 3;
// var b = 9;
// var c = 10;

// a = a+b+c;
// b = a-b-c;
// c = a-b-c;
// a = a-b-c;
//  a = a+b;
//  b = a-b;
//  a = a-b;
// [a,b]=[b,a]
//  console.log([c,a])

// //node index.js
// var num = 153;
// var sum = 0;
// var hello  = num.toString();
// var pow = hello.length;
// // console.log(pow)
// while(num>0){
//   var no = num%10
// sum += no**pow
// num = (num-no)/10
// }
// console.log(sum)
// if (sum == hello){
//   console.log("yes")
// }
// else{
//   console.log("not")
// }


// var p = 23;
// var count;
// for(i =1;i<p;i++){
//   if(p%i == 0){
//     count+=1
//   }
// }
// if(count == 0){
//   console.log("prime")
// }else{
//   console.log("not prime")
// }

// var array = [1,2,3,4,5,6,7,8,9];
// var string = array.join();
// for(var i =1;i<string.length;i++){
//     if(string[i]%3 == 0){
//       var new_ =  string[i].replace('@');
//     }
//     console.log(new_)
// }



// node index.js
// var input = "this is a test";
// var reverse = "";
// for(var i =13;i<input.length; i--){
//     if(i>=0){reverse += input[i] 


//     }
// }
//     console.log(reverse)
    

// var array = [1,2,3,1,2]
// var count =0;

// for(var i = 0;i<array.length;i++){
//     for (var j =i+1;j<array.length;j++){
//         if(array[i]  ==(array[j])){
//             count +=1
//         } 
// }
// }

// if(count>0){
//       console.log("true , "+count)}
// }else{
//     console.log("false ")
// }


// var array = [1,2,3,4,6,8,10];
// var arry = [];

// for(var i = 0;i< array.length;i++){
//    if( array[i]+1!=array[i+1] ){
//     arry = 


//    }

// }

// var string = "this data ";
// var h =string.replaceAll()

// console.log(h)

// count vowels from the string

// let str = "HELLO WORLD";
// let lstr = str.toLowerCase();
// console.log(lstr);

// let count = 0;
// function vowels() {
//   for (let i = 0; i < lstr.length; i++) {
//     let char = lstr[i];
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        
//       console.log(char);
//       count++;
//     }
//   }
//   console.log("the number of vowels in string is", count);
// }
// console.log("the list of vowels from the string is")
// vowels();
// code for the count of  vowels given in the string


// find the sum of elements of the array


// A = [1, 2, 4, 5];
// sum = 0;
// for (i = 0; i < A.length; i++) {
//   console.log(A[i]);
//   sum += A[i];
//   console.log(sum);
//  }
// console.log("The sum of the array elements is" , sum);


// // merge two sorted arrays

// A = [[1, 2, 3],[4, 5, 6]]
// B = A.toString()
// console.log(B)
// C = B.split()
// console.log(C)
// console.log(typeof(C))

//fizzbuzz game

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
     
//   fizz buzz game code
//largest number in array

// A = [12,23,45,34,65,23,67,87,45,56]

// largestnumber = Math.max(...A)
// console.log(largestnumber)
// to find the largest number among the array



// pealindrome checker

// str  = "racecar"
// A = str.split("")
// console.log(A)
// rev = A.reverse()
// console.log(rev)
// revstr = rev.join("")
// console.log(revstr)
// function palindromechecker(){
//     if(str == revstr){
//         console.log("yes it is a palindrome")
//     }else{
//         console.log("no, it is not a palindrome")
//     }
// }
// palindromechecker()
// it is the code about palindrome checker

// node index.js

// var string= "124";
// var sum = 0;
// for(var i =0;i<string.length;i++){
//     sum += string[i]**string.length;
// console.log(sum)


// }
// if (sum == string){
//     console.log("armstrong number")
// }
// else {
//     console.log("not armstrong number")
// }

// var array = [1,2,3,4,5,6,7]
// var count  = 0;
// for(var i = 0;array[i]!= undefined;i++){
//     if(array[i] != undefined){
//         count+= 1
//     }

// }
// console.log(count);
// var x = 0;
// for(var i =0;i<count;i++){
//     for(var j = 2;j<array[i];j++){
//     if(array[i]%j != 0){
//         x+= 1;
//     }
//     console.log(x)

//     }

    
//     if(x>0){console.log("prime number"+ array[i])}
//     else{console.log("not prime"+ array[i])}

// }


// // Special Round


// let array = [2,2,]
// let length = 0;
// for(i=0;array[i]!=undefined;i++){

// length = length + 1
// }
// console.log("length  = "+ length)


// // prime
// let prime = 1;
// let temp = [];
// for(j=0;j<length;j++){

//     // for(k=2;k<array[j];j++){
//         if(array[j]%2==0){
            
//         }
//         else{
//             prime = prime + 1
//             temp.push(array[j])
//         }
//     // }

// }


// // LArgest Prime

// console.log(temp)

// console.log('Total prime =',prime)
// temp = temp.sort((a,b) => b-a)
// console.log("largest number in array "+ temp[0])



// // // Special Round


// let array = [3,5,7,11,13,17,2]
// let length = 0;
// for(i=0;array[i]!=undefined;i++){

// length = length + 1
// }
// console.log(length)

// let prime = 1;
// let temp = [];
// for(j=0;j<length;j++){

//     for(k=2;k<array[j];j++){
//         if(array[j]%2==0){
            
//         }
//         else{
//             prime = prime + 1
//             temp.push(array[j])
//         }
//     }

// }


// // LArgest Prime
// console.log(temp)

// console.log('Total prime =',prime)
// temp = temp.sort((a,b) => b-a)
// console.log(temp[0])


// function sum(a=5,b=7){
//     return a+b;
//     return a-b;
// };
// console.log(sum(0,0));

// for(var i = 1;i<=5;i++){
//     for(var j =1;j<=i;j++){
//         for(var k = 1;k<=j;k++){

//             console.log("i, j, k,k",i,j)}
//         }
    
//}

for(var i = 5;i<=1;i--){

    
    let string = ''
        for(var j = 1;j>=5;j++){
            string += "*";
        }
       console.log(string) }
             
        
    
// for(var i =1;i<=5;i++){
    
//     for(var j =1; j<=i;j++){
//         for(var t =0; t <26;t++){

//         }
//         char+=(char)
//         asciivalue ++;
        
        
//      } console.log(string);
//      } console.log();
    
// for(var i =69; i>=65;i--) {
//      string=''
//     for(var j =69;j>=i;j--){
//         // for(var t =0;t<26;t++){}    

//               string += String.fromCharCode(j)
              
    
        
//     }
    
//     console.log(string)


// }


//      const asciiValue = 65; // ASCII value to convert to character
//      const char = String.fromCharCode(asciiValue); // Convert ASCII to character
//      console.log(char); // Outputs: A
     
// let name = "priy mavani";
// let age = 19;



// console.log()

// console.log(`my name is  ${name} and my age is ${age} `)

// console.log()
// console.log("my name is ", name+" and my age is", age)


// console.log()
// console.log("my name is "+ name+" and my age is"+ age)

  


// let [one,two ,three]=[{one:"hello i am here "},{three:"bye i am going"},{two:" i am very sorry"}]

// console.log(one)
// console.log(two)

// var {name,age}= {name:"priy",age:"19"}
// console.log(name)
// console.log(age)

const hi = new Set();
hi.add(1);
hi.add(5);
hi.add(1);
console.log("Set : h - ",Array.from(hi).join(","));

   for(var i =1;i<=5;i++){
    var string = ''
    for(var j =1;j<=i;j++){
string+=String.fromCharCode(64+j)

    }
    console.log(string)
   }














