import { Employee } from '../models/Employee';

export class EmployeeService {
    private employees: Employee[] = [];

    // Add an employee to the list
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    // Find employees by department
    findEmployeesByDepartment(department: string): Employee[] {
        return this.employees.filter(employee => employee.department === department);
    }

    // Calculate total salary of employees in a department
    calculateTotalSalary(department: string): number {
        return this.employees
            .filter(employee => employee.department === department)
            .reduce((total, employee) => total + employee.salary, 0);
    }
}
