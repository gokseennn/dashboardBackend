import { RegistrationStatus } from 'src/auth-module/auth.service';
import { Employees } from 'src/entitys/employees.entity';
import { EmployeesService } from './employees.service';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    addEmployee(name: string, position: string, MainUserID: number): Promise<RegistrationStatus>;
    getEmployees(MainUserId: number): Promise<Employees[]>;
}
