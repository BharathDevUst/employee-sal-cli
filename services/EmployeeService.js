"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employees = [];
    }
    // Add an employee to the list
    EmployeeService.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    // Find employees by department
    EmployeeService.prototype.findEmployeesByDepartment = function (department) {
        return this.employees.filter(function (employee) { return employee.department === department; });
    };
    // Calculate total salary of employees in a department
    EmployeeService.prototype.calculateTotalSalary = function (department) {
        return this.employees
            .filter(function (employee) { return employee.department === department; })
            .reduce(function (total, employee) { return total + employee.salary; }, 0);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
