/*
url formate

http://127.0.0.1:5500/JavaScript/Window%20Object(BOM)/Window.html

protocal    - http
hostname    - 127.0.0.1
port        - 5500
path        - /JavaScript/Window%20Object(BOM)/Window.html
*/
//Window object (BOM) (global Object)
console.log(window);
//details about history of the application
//(back() & forward())
console.log(window.history);
//details about url
//to get the url details or modify the url details
console.log(window.location);
//document represents the webpage
console.log(window.document);
//geo location of the system
console.log(window.navigator);

console.log('----------------------------------------------');
//all the window properties or functions can be acceced without window keyword
console.log(history);
console.log(location);
console.log(document);
console.log(navigator);

console.log('----------------------------------------------');
/*
window.alert('Hi')
alert('Welcome')

const isAdult = confirm('Are you adult ?')
console.log(('isAdult ', isAdult));

const age = prompt('What is your age ?')
console.log('Age ', age);
*/
window.console.log('I belongs to windows object');

console.log('----------------------------------------------');

//'this'  is a keyword which will be always pointing to the current object
//by default all properties belong to window object unless it is belong to some other object