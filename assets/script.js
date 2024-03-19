// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];
// // Collect employee data
const collectEmployees = function () {
  //   // TODO: Get user input to create and return an array of employee objects
  //   // firstName lastName salary
  //   // return the name of the employees in an array\

  let addEmployees = true;

  while (addEmployees) {
    firstName = prompt("Enter the employees first name");
    lastName = prompt("Enter the employees last name");
    salary = prompt("Enter the employees salary");

    // Validate if salary is a number, default to 0 if not
    // if (isNaN(salary)) {
    //   salary = 0;
    // } else {
    //   salary = parseFloat(salary);
    // }
    // Create an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    };
    employees.push(employee);
    // Ask the user if they want to add more employees
    addEmployees = confirm("Add another employee?");
  }
  return employees
}// Call the function to collect employee data
// const employeeArray = collectEmployees();
// console.log(employeeArray); // Display the array of employee objects

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // define totoal salary variable

  let totalSalary = 0;
  // take all of the salaries and add them together. then devide by the number of salraies added 
  // use a for loop to go through the array of salaries 
  for (let index = 0; index < employeesArray.length; index++) {
    const element = employeesArray[index];
    totalSalary = totalSalary + element.salary
    // salary is element.salary ... add to total salary.
  }  // find the average
  console.log(totalSalary)
  const average = totalSalary / employeesArray.length;
  // console log average
  console.log(`The average employee salery between our ${employeesArray.length} employee(s) is ${average}`);
  return average;
}


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  //   // TODO: Select and display a random employee math.radnom math.
  let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(randomEmployee);
  console.log("Congrats to " + randomEmployee.firstName + " " + randomEmployee.lastName + " our random raffle winner!");
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName} our random raffle winner!`);
  
  //   // put all employees in the array 
  // //   // shake - randomize the box
  // draw a name from the box 
  // show or announce - console log the random empoloyees name 
  // Math.floor(Math.random()* employeesArray.length)];
  // console.log employeArray[index] - random  numb from 34 
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
