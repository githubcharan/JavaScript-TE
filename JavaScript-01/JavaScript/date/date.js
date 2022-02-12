console.log('Date Object');
// Returns system date  
var systemDate = new Date()
console.log(systemDate);
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getDate());
console.log(systemDate.getMonth()); //  11
console.log(systemDate.getDay());  //  2

// returns date by adding milliseconds to January 1 1970
var dateUsingMillisecondsConst = new Date(86400000)
console.log(dateUsingMillisecondsConst);

// 
console.log('--------------String Constructor---------------');
var dateStringConst = new Date('Dec 12 2020')
console.log(dateStringConst);
console.log(dateStringConst.getDay());
console.log(dateStringConst.getFullYear());

// dd/mm/yyyy 
var dateVal = dateStringConst.getDate()
var monthval = dateStringConst.getMonth()
var yearVal = dateStringConst.getFullYear()

var fullDate = `${dateVal}/${monthval + 1}/${yearVal}`
console.log(fullDate);

console.log('----------------------------');
// new Date(year,month,day,hours,minutes,
// seconds,milliseconds) Constructor

var dateObj = new Date(2021, 11)
console.log(dateObj);
var dateObj1 = new Date(2021, 10, 21)
console.log(dateObj1);
var dateObj2 = new Date(2021, 0, 21, 12, 56, 56, 878)
console.log(dateObj2);
console.log(dateObj2.getMilliseconds());

console.log('----------------------------');

var systemDate1 = new Date('Dec 12 2012')
console.log(systemDate1);

var monVal = systemDate1.getMonth()
var dayValue = systemDate1.getDay()
var yearValue = systemDate1.getFullYear()
var dateValue = systemDate1.getDate()

var months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December']

var monthData = months[monVal]

var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday']
var dayData = weekdays[dayValue]

var formattedDate = `${dayData}, ${monthData} ${dateValue}, ${yearValue}`
console.log(formattedDate);
// Tue, Dec 12, 2012

console.log('=---------------------------------');

var dateObjVal = new Date()
console.log(dateObjVal);
// dateObjVal.toLocaleDateString(locales,options )
var formattedDate1 = 
dateObjVal.toLocaleDateString('en-US',
    {
        weekday: 'long',
        month: 'short',
        year: 'numeric',
        day: 'numeric'
    })
console.log(formattedDate1);