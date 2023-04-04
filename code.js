//1. Write a js program to find maximum between two numbers.
    // function largestnumber(number1, number2) {
    //     if (number1 > number2) {
    //         return(number1+"-is greatest");
    //     } 
    //     else {
    //         return(number2+"-is greatest");
    //     }
    //   }
    //   console.log(largestnumber(78, 87)); 
    //   console.log(largestnumber(451, 500)); 
//.......................................................................................
    

//2. Write a js program to find maximum between three numbers.
  
//   function largestnum(num1, num2, num3)
//   {
//       if(num1>num2 && num1>num3)
//       {
//         return(num1+"-is greatest");
//       }
//       else if(num2>num1 && num2>num3)
//       {
//         return(num2+"-is greatst");
//       }
//       else if(num3>num1 && num3>num1)
//       {
//         return(num3+"is greatest");
//       }
//   }

// console.log(largestnum(78, 87 , 120)); 
// console.log(largestnum(40, 50 , 98));   

//.......................................................................................


//3. Write a js program to check whether a number is negative, positive or zero.
// function checkNumber(number) {
//     if (number > 0) {
//       console.log("The number is positive");
//     } else if (number < 0) {
//       console.log("The number is negative");
//     } else {
//       console.log("The number is zero");
//     }
//   }
//   checkNumber(-53); 
//   checkNumber(0); 
//   checkNumber(68);

//.......................................................................................


//4. //Write a js program to check whether a number is divisible by 5 and 11 or not.
// function number_is_divisible(num) {
//     if (num % 5 === 0 && num % 11 === 0) {
//       console.log("The number is divisible by 5 and 11");
//     } else {
//       console.log("The number is not divisible by 5 and 11");
//     }
//   }

//   number_is_divisible(9); 
//   number_is_divisible(110); 
 
//.......................................................................................

//5. Write a js program to check whether a number is even or odd.
// function check_num_EvenOdd(num) {
//     if (num % 2 === 0) {
//       console.log("The number is even");
//     } else {
//       console.log("The number is odd");
//     }
//   }

//   check_num_EvenOdd(33);
//   check_num_EvenOdd(38);


//.......................................................................................


//7. Write a js program to check whether a character is alphabet or not.
// function checkAlphabet(charcter) {
//     if ((charcter >= "a" && charcter <= "z") || (charcter >= "A" && charcter <= "Z")) {
//       console.log(charcter + " is an alphabet");
//     } else {
//       console.log(charcter + " is not an alphabet");
//     }
//   }
//   checkAlphabet("F"); 
//   checkAlphabet("#"); 

//.......................................................................................


//8. Write a js program to input any alphabet and check whether it is vowel or consonant.
// function checkVowelConsonant(alphabet) {
//     if (
//       alphabet === "a" ||
//       alphabet === "e" ||
//       alphabet === "i" ||
//       alphabet === "o" ||
//       alphabet === "u" ||
//       alphabet === "A" ||
//       alphabet === "E" ||
//       alphabet === "I" ||
//       alphabet === "O" ||
//       alphabet === "U"
//     ) {
//       console.log(alphabet + " is a vowel");
//     } else {
//       console.log(alphabet + " is a consonant");
//     } 
    
//   }
// const alphabet = prompt('please Enter an alphabet:');
// checkVowelConsonant(alphabet);

//.......................................................................................

//9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// function checkChracterType(chracter) {
//         if ((chracter >= "a" && chracter <= "z") || (chracter >= "A" && chracter <= "Z")) {
//           console.log(chracter + " is an alphabet");
//     } else if (chracter >= "0" && chracter <= "9") {
//       console.log(chracter + " is a digit");
//     } else {
//       console.log(chracter + " is a special character");
//     }
//   }
// const chracter = prompt('please Enter a chracter:');
// checkChracterType(chracter);
//.......................................................................................

//10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// function checkCharCase(char) {
//     if (char >= "a" && char <= "z") {
//       console.log(char + " is a lowercase alphabet");
//     } else if (char >= "A" && char <= "Z") {
//       console.log(char + " is an uppercase alphabet");
//     } else {
//       console.log(char + " is not an alphabet");
//     }
//   }
// const char = prompt('please Enter a char:');
// checkCharCase(char);

//.......................................................................................


//13. Write a js program to count total number of notes in given amount.


// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
// const angle1 = parseInt(prompt('Enter the first angle:'));
// const angle2 = parseInt(prompt('Enter the second angle:'));
// const angle3 = parseInt(prompt('Enter the third angle:'));

// const sumOfAngles = angle1 + angle2 + angle3;

// if (sumOfAngles === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
//   console.log('The triangle is valid.');
// } else {
//   console.log('The triangle is not valid.');
// }

//.......................................................................................


// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// const side1 = parseInt(prompt('Enter the length of side 1:'));
// const side2 = parseInt(prompt('Enter the length of side 2:'));
// const side3 = parseInt(prompt('Enter the length of side 3:'));

// if (side1 === side2 && side2 === side3) {
//   console.log('The triangle is equilateral.');
// } else if (side1 === side2 || side2 === side3 || side3 === side1) {
//   console.log('The triangle is isosceles.');
// } else {
//   console.log('The triangle is scalene.');
// }

//.......................................................................................


// 18. Write a js program to calculate profit or loss.
// function calculateProfitOrLoss(costPrice, sellingPrice) {
//     if (sellingPrice > costPrice) {
//       const profit = sellingPrice - costPrice;
//       console.log(`Profit: ${profit}`);
//     } else if (sellingPrice < costPrice) {
//       const loss = costPrice - sellingPrice;
//       console.log(`Loss: ${loss}`);
//     } else {
//       console.log("No profit, no loss");
//     }
//   }
//   calculateProfitOrLoss(1000, 1050); 
//   calculateProfitOrLoss(2050, 1500); 
//   calculateProfitOrLoss(1050, 1050);

//.......................................................................................

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// function calculateGrade(totalMarks) {
//     const percentage = (totalMarks / 500) * 100;
    
//     let grade;
//     if (percentage >= 90) {
//       grade = 'A';
//     } else if (percentage >= 80) {
//       grade = 'B';
//     } else if (percentage >= 70) {
//       grade = 'C';
//     } else if (percentage >= 60) {
//       grade = 'D';
//     } else if (percentage >= 40) {
//       grade = 'E';
//     } else {
//       grade = 'F';
//     }
    
//     console.log(`Total Marks: ${totalMarks}`);
//     console.log(`Percentage: ${percentage}%`);
//     console.log(`Grade: ${grade}`);
// //   }
//   calculateGrade(75, 85, 90, 80, 95);

//.......................................................................................