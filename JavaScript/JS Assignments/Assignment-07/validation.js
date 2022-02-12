const form = document.getElementById("form")

const uname = document.getElementById("name")

const email = document.getElementById("email")

const password = document.getElementById("password")

const age = document.getElementById("age")

const tandc = document.getElementById("tc")

const sub1 = document.getElementById("sub1")
const sub2 = document.getElementById("sub2")
const sub3 = document.getElementById("sub3")
const sub4 = document.getElementById("sub4")
    //uname.addEventListener('keyup', isNameValid)
const state = document.getElementById("state")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateform()
})

function validateform() {
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let ageValue = age.value.trim()
    let gender = document.getElementsByName("gender")
    let stateVal = state.value

    isNameValid(nameValue)
    isEmailvalid(emailValue)
    isPasswordvalid(passwordValue)
    isAgeValid(ageValue)
    isTC_Checked(tandc)
    isGenderChecked(gender)
    isSubjectValid()
    isStateSelected(stateVal)

    let inputs = document.querySelectorAll('input')

    if (
        isNameValid(nameValue) &&
        isEmailvalid(emailValue) &&
        isPasswordvalid(passwordValue) &&
        isAgeValid(ageValue) &&
        isTC_Checked(tandc) &&
        isGenderChecked(gender) &&
        isSubjectValid() &&
        isStateSelected(stateVal)
    ) {
        alert("validation  sucess")
        inputs.forEach(input => input.value = '')
    } else {
        alert("please enter a valid data")
        return false
    }

}



function isNameValid(nameValue) {
    if (nameValue === "") {
        setError(uname, '! name cannot be empty')
        return false
    } else if (nameValue.length < 3) {
        setError(uname, '! enter minimun 3 characters')
        return false
    } else if (!nameCheck(nameValue)) {
        setError(uname, '! enter only alphabets no special characters allowed')
        return false
    } else {
        setSuccess(uname)
        return true
    }

}

function isAgeValid(ageValue) {
    if (ageValue >= 1 && ageValue <= 150) {
        setSuccess(age)
        return true
    } else {
        setError(age, '! age should be greaterthan 0 and lessthan 150')
        return false
    }
}

function isEmailvalid(emailValue) {
    if (emailValue === "") {
        setError(email, '! email cannot be empty')
        return false
    } else if (!emailCheck(emailValue)) {
        setError(email, '! invalid email format')
        return false
    } else {
        setSuccess(email)
        return true
    }
}

function isPasswordvalid(passwordValue) {
    if (passwordValue === "") {
        setError(password, '! password cannot be empty')
        return false
    } else if (passwordValue.length < 8) {
        setError(password, '! password must be minumum 8 characters')
        return false
    } else if (!passCheck(passwordValue)) {
        setError(password, '! password should contain number,symbol,alphabets (upper and lower case)')
        return false
    } else {
        setSuccess(password)
        return true
    }
}

function isTC_Checked(tandc) {
    if (!tandc.checked) {
        setError(tc, '! click on agree terms checkbox')
        return false
    } else {
        setSuccess(tc)
        return true
    }
}

function isGenderChecked(gen) {
    if (!gen[0].checked && !gen[1].checked) {
        Err("genderErrorMsg", '! please select anyone')
        return false
    } else {
        notErr("genderErrorMsg")
        return true
    }
}

function isSubjectValid() {
    let count = 0
    if (sub1.checked == true) {
        count++
    } else if (sub2.checked == true) {
        count++
    } else if (sub3.checked == true) {
        count++
    } else if (sub4.checked == true) {
        count++
    } else {
        count = 0
    }
    console.log(count);
    if (count != 0) {
        notErr("subjectErrorMsg")
        return true
    } else {
        Err("subjectErrorMsg", '! please select atleast one')
        return false
    }
}

function isStateSelected(opt) {
    if (opt === '-select-') {
        Err("stateErrorMsg", '! please select anyone')
        return false
    } else {
        notErr("stateErrorMsg")
        return true
    }
}

/*Error functions */
function Err(input, message) {
    let val = document.getElementById(input)
    val.innerText = message
    val.style.visibility = "visible"
    val.style.color = "red"
}

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = message
    parent.classList.add('error')
    parent.classList.remove('success')
}
/*Success functions */
function notErr(input) {
    let val = document.getElementById(input)
    val.innerText = ""
    val.style.visibility = "hidden"
}

function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
/*Checking functions */
function nameCheck(input) {
    let nameReg = /^[A-Za-z]+$/
    let valid = nameReg.test(input)
    return valid
}

function passCheck(input) {
    let passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    let valid = passwordReg.test(input)
    return valid
}

function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)
    return valid
}