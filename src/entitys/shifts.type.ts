import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { MainUsers } from './user.entitiy';
import { Shifts } from './shifts.entity';

@Entity()
export class ShiftType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    hourlyRate: number;
    //test

    @ManyToOne(() => MainUsers, mainUsers => mainUsers.shiftTypes)
    mainUser: MainUsers;

    @OneToMany(() => Shifts, shifts => shifts.shiftType)
    shifts: Shifts[];
}