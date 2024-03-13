import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationStatus } from 'src/auth-module/auth.service';
import { Employees } from 'src/entitys/employees.entity';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) { }

    @Post('addEmployee')
    async addEmployee(
        @Body('name') name: string,
        @Body('position') position: string,
        @Body('MainUserId') MainUserID: number,

    ): Promise<RegistrationStatus> {
        const employee = new Employees();
        employee.Name = name
        employee.Position = position
        employee.MainUserID = MainUserID;
        return this.employeesService.addEmployee(employee)
    }
    @Post('getEmployees')
    async getEmployees(
        @Body('MainUserId') MainUserId:number,
    ): Promise<Employees[]>{
        return this.employeesService.getEmployees(MainUserId)
    }
}
