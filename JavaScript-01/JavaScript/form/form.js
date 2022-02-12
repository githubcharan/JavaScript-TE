const loginElement = document.getElementById('login')
loginElement.addEventListener('click', function () {
    // debugger
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
        if (userName.length > 10) {
            console.log(userName);
            showUserNameError(false)
            return true
        } else {
            showUserNameError(true, 'Username length should not be less than 10')
            return false
        }
    } else {
        // console.log('user name is empty');
        showUserNameError(true, 'Username cannot be empty')
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
        showPasswordError(true, 'Password cannot be empty')
        return false
    }
}

function showUserNameError(isShowError, errMsg) {
    const ele = document.getElementById('usernameError')
    if (isShowError) {
        ele.innerText = errMsg
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

function showPasswordError(isError, errMsg) {
    const ele = document.getElementById('passwordError')
    if (isError) {
        ele.innerText = errMsg
        ele.style.display = 'block'
    } else {
        ele.innerText = ''
        ele.style.display = 'none'
    }
}

// regex