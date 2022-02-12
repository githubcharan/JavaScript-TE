//document.write('Welcome to DOM session')
//if id is present it returns element else null
const element = document.getElementById('demo')
console.log(element);
element.innerText = 'DOM'

//document.getElementById('id')     used to get id only and returns single element
/*  used to get id,tag,class     querySelector
document.querySelector('h1')
document.querySelector('#demo')
document.querySelector('.class')
*/
console.log('-----------------------------------------');
const pElement = document.querySelector('.test')
console.log(pElement);

const tagElement = document.querySelector('h1')
console.log(tagElement);

const idElement = document.querySelector('#demo')
console.log(idElement);

console.log('-----------------------------------------');
//to select multiple elements by class name
//getElementsByClassName
const personElements = document.getElementsByClassName('person')
console.log(personElements);
personElements[2].innerText = 'Mumbai'

for (let i = 0; i < personElements.length; i++) {
    if (i === 0) {
        personElements[i].innerText = 'Charan Teja'
    } else if (i === 1) {
        personElements[i].innerText = 'E'
    } else {
        personElements[i].innerText = 'Andhra Pradesh'
    }
}

console.log('-----------------------------------------');
//it returns array of elements
//getElementsByTagName
const pElements = document.getElementsByTagName('p')
console.log(pElements);
for (let i = 0; i < pElements.length; i++) {
    console.log(pElements[i]);
    pElements[i].style.color = 'yellow'
}

console.log('-----------------------------------------');
//it returns array of elements
const personElementsAll = document.querySelectorAll('.person')
for (let i = 0; i < personElementsAll.length; i++) {
    //console.log(personElementsAll[i]);
    personElementsAll[i].style.color = 'white'
    personElementsAll[i].style.fontsize = '20px'
    personElementsAll[i].style.border = '1px solid black'
    personElementsAll[i].style.borderRadius = '8px'

}
console.log(personElementsAll);
const pTags = document.querySelectorAll('p')
for (let i = 0; i < pTags.length; i++) {
    //console.log(pTags[i]);
    pTags[i].style.backgroundColor = 'red'
}
console.log(pTags);

console.log('-----------------------------------------');
//create element
const h2Element = document.createElement('h2')
h2Element.innerText = 'This is h2 element'
console.log(h2Element);
h2Element.style.color = 'violet'
document.body.appendChild(h2Element)

console.log('-----------------------------------------');
const labelElements = document.getElementsByTagName('label')
    //adding style based on css file classes
    //adding single class
labelElements[0].className = 'labelTag'
    //adding multiple classes
labelElements[1].classList = 'labelTag labelBg'

console.log('-----------------------------------------');
const userElement = document.getElementById('user')
    //innerHTML will parse the string as HTML code
userElement.innerHTML = '<h1>My name is Charan Teja</h1>'

const user1Element = document.getElementById('user1')
    //innerText will parse the string as plain text or string itself
user1Element.innerText = '<h1>My name is Charan Teja</h1>'

console.log('-----------------------------------------');

//to hide the element
const hobbiesListElement = document.getElementById('hobbieslist')
hobbiesListElement.style.display = 'none'

//to show the element
/*
const hobbiesListElement=document.getElementById('hobbieslist')
hobbiesListElement.style.display='block'
 */