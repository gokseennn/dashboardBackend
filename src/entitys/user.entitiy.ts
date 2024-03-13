// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ShiftType } from './shifts.type';
import { Shifts } from './shifts.entity';

@Entity('MainUsers')
export class MainUsers {
  @PrimaryGeneratedColumn()
  MainUserID: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ShiftType, shiftType => shiftType.mainUser.MainUserID)
  shiftTypes: ShiftType[];

  @OneToMany(() => Shifts, shift => shift.MainUser)
  shifts: Shifts[];
}
