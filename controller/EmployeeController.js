"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
var inquirer_1 = require("inquirer");
var Employee_1 = require("../models/Employee");
var EmployeeService_1 = require("../services/EmployeeService");
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
        this.employeeService = new EmployeeService_1.EmployeeService();
    }
    // Function to add an employee
    EmployeeController.prototype.addEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, department, salary, employee;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Enter employee name:',
                                validate: function (input) { return input.trim() !== '' || 'Name cannot be empty'; },
                            },
                            {
                                type: 'input',
                                name: 'department',
                                message: 'Enter employee department:',
                                validate: function (input) { return input.trim() !== '' || 'Department cannot be empty'; },
                            },
                            {
                                type: 'number',
                                name: 'salary',
                                message: 'Enter employee salary:',
                                validate: function (input) { return input ? input > 0 || 'Salary must be a positive number' : 'Salary must be a number'; },
                            },
                        ])];
                    case 1:
                        _a = _b.sent(), name = _a.name, department = _a.department, salary = _a.salary;
                        employee = new Employee_1.Employee(name, department, salary);
                        this.employeeService.addEmployee(employee);
                        console.log("Employee ".concat(name, " added successfully!\n"));
                        return [2 /*return*/];
                }
            });
        });
    };
    // Function to find employees by department and calculate total salary
    EmployeeController.prototype.findEmployeesByDepartment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var department, employees, totalSalary;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'input',
                                name: 'department',
                                message: 'Enter the department to search for:',
                            },
                        ])];
                    case 1:
                        department = (_a.sent()).department;
                        employees = this.employeeService.findEmployeesByDepartment(department);
                        if (employees.length === 0) {
                            console.log("No employees found in the ".concat(department, " department.\n"));
                        }
                        else {
                            totalSalary = this.employeeService.calculateTotalSalary(department);
                            console.log("Employees in the ".concat(department, " department:"));
                            employees.forEach(function (emp) {
                                console.log("- ".concat(emp.name, ", Salary: ").concat(emp.salary));
                            });
                            console.log("Total Salary for ".concat(department, ": ").concat(totalSalary, "\n"));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return EmployeeController;
}());
exports.EmployeeController = EmployeeController;
