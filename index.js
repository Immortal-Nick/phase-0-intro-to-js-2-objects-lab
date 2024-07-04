// Write your solution in this file!
const employee = {
    name: "fay",
    streetAdress: "307 pipeline",
}

//it does not modify the original employee, but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }

  // updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    
    // Return the updated employee object
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    // Create a shallow copy of the employee object
    let newEmployee = { ...employee };
    
    // Delete the specified key from the cloned object
    delete newEmployee[key];
    
    // Return the new cloned object
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee object
    delete employee[key];
    
    // Return the modified employee object
    return employee;
  }