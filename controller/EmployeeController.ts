import inquirer from 'inquirer';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/EmployeeService';

export class EmployeeController {
    private employeeService: EmployeeService;

    constructor() {
        this.employeeService = new EmployeeService();
    }

    // Function to add an employee
    async addEmployee(): Promise<void> {
        const { name, department, salary } = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name:',
                validate: (input) => input.trim() !== '' || 'Name cannot be empty',
            },
            {
                type: 'input',
                name: 'department',
                message: 'Enter employee department:',
                validate: (input) => input.trim() !== '' || 'Department cannot be empty',
            },
            {
                type: 'number',
                name: 'salary',
                message: 'Enter employee salary:',
                validate: (input) => input ? input > 0 || 'Salary must be a positive number' : 'Salary must be a number',
            },
        ]);

        const employee = new Employee(name, department, salary);
        this.employeeService.addEmployee(employee);
        console.log(`Employee ${name} added successfully!\n`);
    }

    // Function to find employees by department and calculate total salary
    async findEmployeesByDepartment(): Promise<void> {
        const { department } = await inquirer.prompt([
            {
                type: 'input',
                name: 'department',
                message: 'Enter the department to search for:',
            },
        ]);

        const employees = this.employeeService.findEmployeesByDepartment(department);

        if (employees.length === 0) {
            console.log(`No employees found in the ${department} department.\n`);
        } else {
            const totalSalary = this.employeeService.calculateTotalSalary(department);
            console.log(`Employees in the ${department} department:`);
            employees.forEach(emp => {
                console.log(`- ${emp.name}, Salary: ${emp.salary}`);
            });
            console.log(`Total Salary for ${department}: ${totalSalary}\n`);
        }
    }
}
