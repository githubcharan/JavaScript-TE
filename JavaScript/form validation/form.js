const loginElement = document.getElementById('login')
loginElement.addEventListener('click', function () {
    // console.log('login button clicked');
    const userNameVal =
        document.getElementById('username').value
    const passwordVal =
        document.getElementById('password').value
    // console.log(userNameVal, passwordVal);
    const isUsernameValid = validateUsername(userNameVal)
    const isPasswordValid = validatePassword(passwordVal)
    if (isUsernameValid && isPasswordValid) {
        alert('Data is valid')
    } else {
        alert('Data is invalid')
    }
})

function validateUsername(userName) {
    if (userName) {
        console.log(userName);
        showUserNameError(false)
        return true
    } else {
        // console.log('user name is empty');
        showUserNameError(true)
        return false
    }
}

function validatePassword(password) {
    if (password) {
        console.log(password);
        showPasswordError(false)
        return true
    } else {
        // console.log('password is empty');
        showPasswordError(true)
        return false
    }
}

function showUserNameError(isShowError) {
    const ele = document.getElementById('usernameError')
    if (isShowError) {
        ele.innerText = 'Username cannot be empty'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

function showPasswordError(isError) {
    const ele = document.getElementById('passwordError')
    if (isError) {
        ele.innerText =
            'Password cannot be empty'
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

// regex