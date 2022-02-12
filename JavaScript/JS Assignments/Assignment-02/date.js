var customedate = new Date('Sept 12 2020');

var Day = customedate.getDay();
var Month = customedate.getMonth();
var date = customedate.getDate();
var year = customedate.getFullYear();

var day = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
var month = ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var MONTH = month[Month]
var DAY = day[Day]

var DATE = `${DAY}, ${MONTH} ${date} ${year}`
console.log(DATE);

console.log('----predefined method--------')

var formattedDate = (new Date('Sept 12 2020')).toLocaleDateString('en-us', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
})
console.log(formattedDate);