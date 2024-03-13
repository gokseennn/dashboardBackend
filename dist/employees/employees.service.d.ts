import { RegistrationStatus } from 'src/auth-module/auth.service';
import { Employees } from 'src/entitys/employees.entity';
import { Repository } from 'typeorm';
export declare class EmployeesService {
    private employeeRepository;
    constructor(employeeRepository: Repository<Employees>);
    addEmployee(employee: Employees): Promise<RegistrationStatus>;
    getEmployees(MainUserID: number): Promise<Employees[]>;
}
