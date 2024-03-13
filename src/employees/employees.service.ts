import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrationStatus } from 'src/auth-module/auth.service';
import { Employees } from 'src/entitys/employees.entity';
import { MainUsers } from 'src/entitys/user.entitiy';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employees)
        private employeeRepository: Repository<Employees>,
    ){}
    async addEmployee(employee: Employees): Promise<RegistrationStatus> {
        try {
            await this.employeeRepository.save(employee);
            return { status: 'success', message: 'Employee saved successfully' };
        } catch (error) {
            return { status: 'error', message: error };
        }
    }
    async getEmployees(MainUserID: number): Promise<Employees[]>{
        return this.employeeRepository.find({ where: { MainUserID } });
    }
}

