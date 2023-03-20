// Task 1
const birth_year  = prompt('Enter your birth year: ');
const current_year = new Date().getFullYear();
let age = current_year - birth_year;
alert('Your age: ' + age);

// Task 2
const radius  = prompt('Enter circle radius: ');
let area = Math.PI * radius**2;
alert('Area: ' + area);

// Task 3
const distance  = prompt('Enter distance between two cities (km): ');
const time  = prompt('Enter amount of time you have to reach their destination (h): ');
let speed = distance / time;
alert(' Speed you need to travel to ' + speed + 'km/h');

// Task 4
const currency_rate = 0.93
const dollars  = prompt('Enter the dollar amount: ');
let euros = dollars * currency_rate;
alert('You will get : ' + euros + ' euros');

// Task 5
const capacity  = prompt('Enter the capacity of a flash drive in GB: ');
number_files = parseInt(capacity * 1024 / 820);
alert(`You can save ${number_files} files of 820 MB each on the flash drive of ${capacity} GB`);