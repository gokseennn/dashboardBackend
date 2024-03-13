import { MainUsers } from './user.entitiy';
import { Shifts } from './shifts.entity';
export declare class ShiftType {
    id: number;
    name: string;
    hourlyRate: number;
    mainUser: MainUsers;
    shifts: Shifts[];
}
