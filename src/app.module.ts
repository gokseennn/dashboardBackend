import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth-module/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth-module/auth.service';
import { MainUsers } from './entitys/user.entitiy';
import { Employees } from './entitys/employees.entity';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { Shifts } from './entitys/shifts.entity';
import { ShiftType } from './entitys/shifts.type';
import { ShiftsController } from './shifts/shifts.controller';
import { ShiftsService } from './shifts/shifts.service';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dashboard',
    entities: [MainUsers, Employees, Shifts,ShiftType],
  }),
    TypeOrmModule.forFeature([MainUsers,Employees,ShiftType,Shifts]),
],
  controllers: [AppController, AuthController,EmployeesController, ShiftsController],
  providers: [AppService, AuthService, EmployeesService, ShiftsService],
})
export class AppModule {}
