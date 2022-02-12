function testclick() {
    console.log('testClick executed');
}

function changeName(name) {
    const element = document.getElementById('username')
    element.innerText = name
}

function removeBgColor() {
    const element = document.getElementById('changeColor')
    element.style.backgroundColor = 'white'
}

function applyBgColor() {
    const element = document.getElementById('changeColor')
    element.style.backgroundColor = 'red'
}

function bgColorChange(color) {
    const element = document.getElementById('colorChange')
    element.style.backgroundColor = color

}

function textColorChange(color) {
    const element = document.getElementById('colorChange')
    element.style.color = color

}

// function getData() {
//     const element = document.getElementById('randomData')
//     console.log('onkeyup', element.value);
//     document.getElementById('show').innerText = element.value.toUpperCase()
// }

// function checkBoxClick() {
//     const element = document.getElementById('hobbies')
//     console.log(element.checked);
// }

// function showData() {
//     console.log('onkeydown');
// }