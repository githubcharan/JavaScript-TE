console.log('Date Object')
    //Returns System Date
var SystemDate = new Date()
console.log(SystemDate)

console.log(SystemDate.getFullYear()); //2021
console.log(SystemDate.getHours()); //15
console.log(SystemDate.getDate()); //21
console.log(SystemDate.getMonth()); //11
console.log(SystemDate.getDay()); //2

//getMonth-returns number
// 0-Jan
// 1-Feb
// 2-Mar 
// 3-Aprl
// 4-May 
// 5-Jun
// 6-July
// 7-Aug 
// 8-Sep 
// 9-Oct
// 10-Nov
// 11-Dec

//getDay-returns number
// 0-Sunday
// 1-Monday
// 2-Tuesday
// 3-Wednesday
// 4-Thursday
// 5-Friday
// 6-Saturday

//From January 1 1970 it will add milliseconds
//1day=86400000 milli sec
var dateInMilliseconds = new Date(86400000) //Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(dateInMilliseconds);

console.log('-------------String Constructer----------------');

var dateStringConst = new Date('Dec 12 2020') //date object
console.log(dateStringConst);
console.log(dateStringConst.getDate());
console.log(dateStringConst.getFullYear());

// dd/mm/yyyy
var dateVal = dateStringConst.getDate()
var monthVal = dateStringConst.getMonth()
var yearVal = dateStringConst.getFullYear()

var fullDate = `${dateVal}/${monthVal+1}/${yearVal}`
console.log(fullDate);
console.log('------------');
//new Date(year,month,day,hours,minutes,sec,millisec) constructor

var dateObj = new Date(2021, 11)
console.log(dateObj);
var dateObj1 = new Date(2021, 10, 21);
console.log(dateObj1);
var dateObj2 = new Date(2021, 0, 21, 12, 56, 56, 856);
console.log(dateObj2);
console.log(dateObj2.getMilliseconds());

console.log('----------------------------');

var SystemDate1 = new Date('dec 21 2021')
console.log(SystemDate1);

var dateValue = SystemDate1.getDate()
var monthValue = SystemDate1.getMonth()
var yearValue = SystemDate1.getFullYear()
var dayValue = SystemDate1.getDay()

//Tuesday, December 21,2021

var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var MonthData = month[monthValue]
var DayData = day[dayValue]

var Formatteddate = `${DayData} ,${MonthData} ${dateValue} ,${yearValue}`
console.log(Formatteddate);

console.log('----------------------------');
//inbuit method to get  custome date formate
var formatted_date = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    year: 'numeric',
    day: 'numeric'

})
console.log(formatted_date);