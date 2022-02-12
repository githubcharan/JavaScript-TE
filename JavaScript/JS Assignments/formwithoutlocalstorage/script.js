const studentData = []
const submitElement = document.getElementById('submit')
let sGenderVal
submitElement.addEventListener('click', function() {
    const student = {
        studentName: '',
        studentAge: '',
        studentGender: '',
        studentMobileNumber: '',
        studentEmail: ''
    }

    const sNameVal = document.getElementById('name').value.trim()
    const sAgeVal = document.getElementById('age').value
    const sGender = document.getElementsByName('gender')
    const sPhNumberVal = document.getElementById('phnumber').value
    const sEmailVal = document.getElementById('email').value
    isNameValid(sNameVal)
    isAgeValid(sAgeVal)
    isNumberValid(sPhNumberVal)
    isEmailValid(sEmailVal)
    isGenderChecked(sGender)
    if (isAgeValid(sAgeVal) === true &&
        isNameValid(sNameVal) === true &&
        isNumberValid(sPhNumberVal) === true &&
        isEmailValid(sEmailVal) === true &&
        isGenderChecked(sGender) === true) {
        student.studentName = sNameVal
        student.studentAge = sAgeVal
        student.studentGender = sGenderVal
        student.studentMobileNumber = sPhNumberVal
        student.studentEmail = sEmailVal
        studentData.push(student)

        displayStudentData(studentData)

        addData()

        alert("submited  sucessfully")
            //clearInputs()


    } else {

    }

})
getData()


function clearInputs() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('phnumber').value = "";
    document.getElementById('email').value = "";
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;

}


function displayStudentData(sData) {
    const tableDiv = document.getElementById('tableData')
    let studentTable = `<table border="1">
    <thead>
    <tr>
    <th>Student Name</th>
    <th>Student Age</th>
    <th>Student Gender</th>
    <th>Student Phone Number</th>
    <th>Student Email</th>
    </thead>`
    sData.forEach(std => {
        studentTable += `<tr>
        <td>${std.studentName}</td>
        <td>${std.studentAge}</td>
        <td>${std.studentGender}</td>
        <td>${std.studentMobileNumber}</td>
        <td>${std.studentEmail}</td>
        </tr>`
    })
    studentTable += `</table>`
    tableDiv.innerHTML = studentTable
}

function isNameValid(name) {
    const ele = document.getElementById('nameError')
    const ele1 = document.getElementById('name')
    ele.style.color = 'red'
    if (name === '') {
        ele.innerText = '! name cannot be empty'
        ele.style.display = 'block'
        ele.style.visibility = 'visible'
        ele1.style.borderColor = 'red'
        return false
    } else if (name.length < 3) {
        ele.innerText = '! name is too short'
        ele.style.display = 'block'
        ele1.style.borderColor = 'red'
        return false
    } else if (!(/^[a-zA-Z]*$/.test(name))) {
        ele.innerText = '! name invalid'
        ele.style.display = 'block'
        ele1.style.borderColor = 'red'
        return false
    } else {
        ele.style.display = 'none'
        ele1.style.borderColor = 'lightgreen'
        return true
    }
}

function isAgeValid(age) {
    const ele = document.getElementById('ageError')
    const ele1 = document.getElementById('age')
    ele.style.color = 'red'
    if (age >= 1 && age <= 50) {
        ele.style.display = 'none'
        ele1.style.borderColor = 'lightgreen'
        return true
    } else {
        ele.innerText = '! age invalid'
        ele.style.display = 'block'
        ele1.style.borderColor = 'red'
        return false
    }
}

function isNumberValid(number) {
    const ele = document.getElementById('phnumberError')
    const ele1 = document.getElementById('phnumber')
    ele.style.color = 'red'
    ele.style.display = 'none'
    if (number >= 6000000000 && number <= 9999999999) {
        ele1.style.borderColor = 'lightgreen'
        return true
    } else {
        ele.innerText = '! number invalid'
        ele.style.display = 'block'
        ele1.style.borderColor = 'red'
        return false
    }
}

function isGenderChecked(gen) {
    const ele = document.getElementById('genderError')
    ele.style.color = 'red'
    if (!gen[0].checked && !gen[1].checked) {
        ele.innerText = '! select anyone'
        ele.style.display = 'block'
        return false
    } else {
        if (gen[0].checked) {
            sGenderVal = gen[0].value
        } else {
            sGenderVal = gen[1].value

        }
        ele.style.display = 'none'
        return true
    }
}

function isEmailValid(mail) {
    const ele = document.getElementById('emailError')
    const ele1 = document.getElementById('email')

    ele.style.color = 'red'
    ele.style.visibility = 'visible'
    if (!((/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).test(mail))) {
        ele.innerText = '! email invalid'
        ele.style.display = 'block'
        ele1.style.borderColor = 'red'
        return false
    } else {
        ele.style.display = 'none'
        ele1.style.borderColor = 'lightgreen'
        return true
    }

}