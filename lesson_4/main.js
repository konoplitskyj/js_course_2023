//Task 1
const Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    displayTime: function () {
        let hh = this.hours < 10 ? '0' + this.hours : this.hours;
        let mm = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        let ss = this.seconds < 10 ? '0' + this.seconds : this.seconds;
        return hh + ':' + mm + ':' + ss;
    },

    addSecond: function () {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
    },

    subtractSecond: function () {
        this.seconds--;
        if (this.seconds < 0) {
            this.seconds = 59;
            this.minutes--;
        }
        if (this.minutes < 0) {
            this.minutes = 59;
            this.hours--;
        }
        if (this.hours < 0) {
            this.hours = 23;
        }
    },

    displayCurrentTime: function () {
        document.write(this.displayTime() + '<br>');
    }
};

Time.hours = 10;
Time.minutes = 59;
Time.seconds = 59;

console.log(Time.displayTime());

Time.addSecond();
console.log(Time.displayTime());

Time.subtractSecond();
console.log(Time.displayTime());

Time.displayCurrentTime();









//Task 2
const Car = {
    manufacturer: '',
    model: '',
    year: 0,
    speed: 0,

    displayInfo: function () {
        document.write('Manufacturer: ' + this.manufacturer + '<br>');
        document.write('Model: ' + this.model + '<br>');
        document.write('Year: ' + this.year + '<br>');
        document.write('Average Speed: ' + this.speed + ' km/h<br>');
    },

    calculateTime: function (distance) {
        const drivingTime = distance / this.speed;
        const breakTime = Math.floor(drivingTime / 4);
        const totalTime = drivingTime + breakTime;
        const hours = Math.floor(totalTime);
        const minutes = Math.floor((totalTime - hours) * 60);
        return hours + ' hours ' + minutes + ' minutes';
    }
};

Car.manufacturer = 'Skoda';
Car.model = 'Octavia';
Car.year = 2012;
Car.speed = 120;

Car.displayInfo();

const distance = 250;
const time = Car.calculateTime(distance);
console.log('Time required to cover ' + distance + ' km: ' + time);