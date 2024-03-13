import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MainUsers } from './user.entitiy';
import { Employees } from './employees.entity';
import { ShiftType } from './shifts.type';

@Entity('Shifts')
export class Shifts {
    @PrimaryGeneratedColumn()
    ShiftID: number;

    @Column({ type: 'date' })
    WorkDate: Date;

    @ManyToOne(() => Employees)
    @JoinColumn({ name: 'EmployeeID' })
    Employee: Employees;

    @ManyToOne(() => MainUsers)
    @JoinColumn({ name: 'MainUserID' })
    MainUser: MainUsers;

    @Column({ type: 'time' })
    ShiftStartTime: Date;

    @Column({ type: 'time' })
    ShiftEndTime: Date;
    
    @ManyToOne(() => ShiftType, shiftType => shiftType.shifts)
    shiftType: ShiftType;
}