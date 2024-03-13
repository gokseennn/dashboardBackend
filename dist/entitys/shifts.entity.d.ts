import { MainUsers } from './user.entitiy';
import { Employees } from './employees.entity';
import { ShiftType } from './shifts.type';
export declare class Shifts {
    ShiftID: number;
    WorkDate: Date;
    Employee: Employees;
    MainUser: MainUsers;
    ShiftStartTime: Date;
    ShiftEndTime: Date;
    shiftType: ShiftType;
}
