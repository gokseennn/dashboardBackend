import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MainUsers } from './user.entitiy';

@Entity('Employees')
export class Employees {
    @PrimaryGeneratedColumn()
    EmployeeID: number;

    @Column({ type: 'varchar', length: 100 })
    Name: string;

    @Column({ type: 'varchar', length: 100 })
    Position: string;

    @ManyToOne(() => MainUsers)
    @JoinColumn({ name: 'MainUserID' })
    MainUserID: number;
}