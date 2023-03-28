// Task 1.1
// const number = +prompt('Enter number: ');

// switch (number) {
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     case 0:
//         alert(")");
//         break;
//     default:
//         alert("Incorrect number!");
// }









// Task 1.2
// const year = +prompt('Enter year: ');

//let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// alert(`Year is ${ isLeapYear ? 'loop' : 'not loop'}`);









//Task 1.3
// let date = prompt("Enter date(day.month.year): ");
// let [day, month, year] = date.split(".");

// day = Number(day);
// month = Number(month);
// year = Number(year);

// let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// let daysInMonth;
// if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
//   daysInMonth = 31;
// } else if (month === 2) {
//   daysInMonth = isLeapYear ? 29 : 28;
// } else {
//   daysInMonth = 30;
// }

// let nextDay = day + 1;
// let nextMonth = month;
// let nextYear = year;

// if (nextDay > daysInMonth) {
//   nextDay = 1;
//   nextMonth += 1;

//   if (nextMonth > 12) {
//     nextMonth = 1;
//     nextYear += 1;
//   }
// }

// console.log(`Next date: ${nextDay}.${nextMonth}.${nextYear}`);













// Task 2.1
// const start = +prompt('Enter start number: ');
// const end = +prompt('Enter end number: ');

// let sum = 0

// if (start > end) {
//     let temp = start;
//     start = end;
//     end = temp;
// }

// for (let i = start; i <= end; i++) {
//     sum += i;
// }

// alert("Sum = " + sum);









// Task 2.2
// let number = +prompt("Enter number: ");
// let count = 0;

// while (number !== 0) {
//   count++;
//   number = Math.floor(number / 10);
// }

// alert(`Number of digits in number: ${count}`);









// Task 2.3
// let numStats = {
//     positive: 0,
//     negative: 0,
//     zero: 0,
//     even: 0,
//     odd: 0
//   };
  
//   for (let i = 0; i < 10; i++) {
//     let num = Number(prompt(`Enter ${i+1} number: `));
//     if (num > 0) {
//       numStats.positive++;
//     } else if (num < 0) {
//       numStats.negative++;
//     } else {
//       numStats.zero++;
//     }
//     if (num % 2 === 0) {
//       numStats.even++;
//     } else {
//       numStats.odd++;
//     }
//   }
  
//   alert(`Number of positive numbers: ${numStats.positive}`);
//   alert(`Number of negative numbers: ${numStats.negative}`);
//   alert(`Number of zero numbers: ${numStats.zero}`);
//   alert(`Number of even numbers: ${numStats.even}`);
//   alert(`Number of odd numbers: ${numStats.odd}`);









// Task 2.4
// const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let currentIndex = 0;
// let input = "";

// do {
//   const currentDay = daysOfWeek[currentIndex];
//   input = prompt(`${currentDay}. Do you want to see the next day?`);
//   currentIndex = (currentIndex + 1) % 7;
// } while (input !== null);