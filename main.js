let employees = [];

// Load employee data
async function loadEmployees() {
    const response = await fetch('db/employees.json');
    employees = await response.json();
}

// Save employee data (simulated)
function saveEmployees() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(employees));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'employees.json');
    downloadAnchor.click();
}

// Example function to add vacation days
function addVacationDay(employeeId, date) {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
        employee.vacationDays.push(date);
    }
}
