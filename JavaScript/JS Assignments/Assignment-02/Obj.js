console.log('----------------Object Creation without new  keyword--------------');

console.log('--(1)--');

var Employee = {
    firstName: 'Allu',
    lastName: 'Arjun',
    ID: 12568,
    Sal: 50000,
    gender: 'Male',
    age: 39,
    isMarried: true,
    getFullName: function() {
        return this.firstName + '' + this.lastName
    }
}

console.log('Full name: ', Employee.getFullName());
console.log(Employee.firstName);
console.log(Employee.lastName);
console.log(Employee.ID);
console.log(Employee.Sal);
console.log(Employee.gender);
console.log(Employee.age);
console.log(Employee.isMarried);

console.log('--(2)--');

var Book = {
    Author: 'Chetan Bhagat',
    Title: 'Two States',
    Price: 80,
    NoOfPages: 265,
    Publisher: 'Sapna',
    getbookdeatail: function() {
        return this.Title + '  -by  ' + this.Author
    }
}
console.log(Book.Author);
console.log(Book.Title);
console.log(Book.Price);
console.log(Book.NoOfPages);
console.log(Book.Publisher);
console.log(Book.getbookdeatail());

console.log('--(3)--');

var Car = {
    price: 4000000,
    model: 2021,
    brand: 'Toyota',
    cname: 'Fortuner',
    color: 'blue',
    getQuote: function() {
        return this.cname + '-' + this.price + 'rs'
    }
}
console.log(Car.cname);
console.log(Car.brand);
console.log(Car.price);
console.log(Car.model);
console.log(Car.color);
console.log(Car.getQuote());

console.log('--(4)--');

var Hotel = {
    name: 'Bliss',
    location: 'India',
    getfulldetails: function() {
        return this.name + ' - ' + this.location
    }
}
console.log(Hotel.name);
console.log(Hotel.location);
console.log(Hotel.getfulldetails());

console.log('--(5)--');

var Mobile = {
    name: 'Mi 10i',
    brand: 'xiaomi',
    price: 25000,
    network: '4G / 5G',
    getmodelprice: function() {
        return this.name + ' - ' + this.price
    }
}
console.log(Mobile.name);
console.log(Mobile.brand);
console.log(Mobile.price);
console.log(Mobile.network);
console.log(Mobile.getmodelprice());

console.log('----------------Object Creation using new Key word---------------------');

console.log('--(1)--');

var Emp = new Object()
Emp.firstName = 'Allu'
Emp.lastName = 'Arjun'
Emp.id = 12568
Emp.Sal = 50000
Emp.gender = 'Male'
Emp.age = 39
Emp.isMarried = true
Emp.getFullName1 = function() {
    return this.firstName + '' + this.lastName
}
console.log(Emp.firstName);
console.log(Emp.lastName);
console.log(Emp.id);
console.log(Emp.Sal);
console.log(Emp.gender);
console.log(Emp.age);
console.log(Emp.isMarried);
console.log(Emp.getFullName1());

console.log('--(2)--');

var Book1 = new Object()
Book1.Author = 'Chetan Bhagat'
Book1.Title = 'Two States'
Book1.Price = 80
Book1.NoOfPages = 265
Book1.Publisher = 'Sapna'
Book1.getbookdeatail = function() {
    return this.Title + '  -by  ' + this.Author
}
console.log(Book1.Author);
console.log(Book1.Title);
console.log(Book1.Price);
console.log(Book1.NoOfPages);
console.log(Book1.Publisher);
console.log(Book1.getbookdeatail());

console.log('--(3)--');

var Car1 = new Object()
Car1.price = 4000000
Car1.model = 2021
Car1.brand = 'Toyota'
Car1.cname = 'Fortuner'
Car1.color = 'blue'
Car1.getQuote1 = function() {
    return this.cname + '-' + this.price + 'rs'
}
console.log(Car1.cname);
console.log(Car1.brand);
console.log(Car1.price);
console.log(Car1.model);
console.log(Car1.color);
console.log(Car1.getQuote1());

console.log('--(4)--');

var Hotel1 = new Object()
Hotel1.name = 'Bliss'
Hotel1.location = 'India'
Hotel1.getfulldetails1 = function() {
    return this.name + ' - ' + this.location
}
console.log(Hotel1.name);
console.log(Hotel1.location);
console.log(Hotel1.getfulldetails1());

console.log('--(5)--');

var Mobile1 = new Object()
Mobile1.name = 'Mi 10i'
Mobile.brand = 'xiaomi'
Mobile1.price = 25000
Mobile1.network = '4G / 5G'
Mobile1.getmodelprice1 = function() {
    return this.name + ' - ' + this.price
}
console.log(Mobile1.name);
console.log(Mobile1.brand);
console.log(Mobile1.price);
console.log(Mobile1.network);
console.log(Mobile1.getmodelprice1());