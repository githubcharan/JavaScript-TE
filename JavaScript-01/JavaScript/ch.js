console.log('started');
const employeeDetails = getEmployee(1234, getEmployeeMoreDetails)
// const eMoreDetails    = getEmployeeMoreDetails(employeeDetails)
console.log('ended');

function getEmployee(id,getEmployeeMoreDetails ) {
    // make api call (asynchronous)
    setTimeout(()=>{
        console.log('employee data');
        const empd = ''
       const empMoreDetails = getEmployeeMoreDetails(empd,getEmployeeSalaryDetails)
    //    const empSalrDetails = getEmployeeSalaryDetails(empMoreDetails)
    },1000)
}
function getEmployeeMoreDetails(empDetails) {
    // make api call(asynchronous)
    setTimeout(()=>{
        console.log('emp more details');

    },0)
}
function getEmployeeSalaryDetails(empMore) {
    setTimeout(()=>{
        console.log('emp salary details');
     const empSalrDetails = getEmployeeSalaryDetails(empMore)
    })
}