// document.write('Welcome to DOM session')
// if id is present it returns element else null
// it returns single element
const element = document.getElementById('demo')
console.log(element);
element.innerText = 'DOM'
element.style.background = 'lightblue'
// it returns single element
const pElement = document.querySelector('.test')
console.log(pElement);

const tagElement = document.querySelector('h1')
console.log(tagElement);

const idElement = document.querySelector('#demo')
console.log(idElement);

console.log('---------------------------');

// it returns array of elements if classname is present 
// getElementsByClassName
const personElements = 
document.getElementsByClassName('person')
console.log(personElements);
personElements[2].innerText = 'Mumbai'

for (let i=0;i<personElements.length;i++) {
    if(i === 0) {
        personElements[i].innerText = 'Vijay'
    } else if(i===1) {
        personElements[i].innerText = 'S'
    } else {
        personElements[i].innerText = 'Chennai'
    }
}

console.log('-------------------------');
// it returns array of elements 
// getElementsByTagName
const pElements = document.getElementsByTagName('p')
console.log(pElements);
for (let i=0;i<pElements.length;i++) {
   console.log(pElements[i]);
   pElements[i].style.color = 'blue'
}
console.log('-------------------------------');

// it returns array of elements
const personElementsAll= 
document.querySelectorAll('.person')
console.log(personElementsAll);
for(let i=0;i<personElementsAll.length;i++) {
    personElementsAll[i].style.border = '1px solid black'
    personElementsAll[i].style.fontSize = '20px'
    personElementsAll[i].style.borderRadius = '8px'
}
const pTags = document.querySelectorAll('p')
console.log(pTags);
for(let i =0;i<pTags.length;i++) {
    pTags[i].style.fontFamily = 'monospace'
    pTags[i].style.backgroundColor = 'lightgray'
}

console.log('-------------------------------');
// createElement
const h2Element = document.createElement('h2')
h2Element.innerText = 'This is h2 element'
console.log(h2Element);
h2Element.style.color = 'green'
document.body.appendChild(h2Element)

console.log('--------------------------------');
const labelElements =
 document.getElementsByTagName('label')
 console.log(labelElements);
// adding style based on css file classes
// adding single class
labelElements[0].className = 'labelTag'
// adding multiple classes
labelElements[1].classList = 'labelTag labelBg'

console.log('----------------------------------------');

const userElement = document.getElementById('user')
// innerHTML will parse the string as HTML code
userElement.innerHTML ='<h1>My name is Ajit</h1>'

const user1Element = document.getElementById('user1')
// innerText will parse the string as plain text or 
// string itself
user1Element.innerText ='<h1>My name is Ajit</h1>'

console.log('----------------------------------');

// to hide the element
const hobbiesListElement = 
document.getElementById('hobbieslist')
hobbiesListElement.style.display = 'none'

// to show the element
/* const hobbiesListElement = 
document.getElementById('hobbieslist')
hobbiesListElement.style.display = 'block' */