import { ShiftType } from './shifts.type';
import { Shifts } from './shifts.entity';
export declare class MainUsers {
    MainUserID: number;
    fullname: string;
    email: string;
    password: string;
    shiftTypes: ShiftType[];
    shifts: Shifts[];
}
