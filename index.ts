import { EmployeeController } from './controller/EmployeeController';
import inquirer from 'inquirer';

const employeeController = new EmployeeController();

async function mainMenu() {
    let shouldContinue = true;

    while (shouldContinue) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add Employee', 'Find Employees by Department', 'Exit'],
            },
        ]);

        switch (action) {
            case 'Add Employee':
                await employeeController.addEmployee();
                break;
            case 'Find Employees by Department':
                await employeeController.findEmployeesByDepartment();
                break;
            case 'Exit':
                shouldContinue = false;
                console.log('Exiting...');
                break;
        }
    }
}

mainMenu();
